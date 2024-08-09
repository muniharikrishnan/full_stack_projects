# Import necessary libraries
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import jwt  # Ensure jwt library is installed (`pip install PyJWT`)
import os

# Initialize Flask application
app = Flask(__name__)
CORS(app)
# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost:5432/taxi'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key_here'  # Replace with a secure secret key for JWT encoding
# Initialize SQLAlchemy
db = SQLAlchemy(app)
# Initialize Bcrypt for password hashing
bcrypt = Bcrypt(app)

# Define User and Driver models
class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.TIMESTAMP, server_default=db.func.now())

class Driver(db.Model):
    __tablename__ = 'drivers'
    driver_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    license_number = db.Column(db.String(50), nullable=False)
    vehicle_number = db.Column(db.String(50), nullable=False)
    vehicle_type = db.Column(db.String(50), nullable=False)

    user = db.relationship('User', backref=db.backref('driver', uselist=False))

# Login endpoint
@app.route('/api/driver/login', methods=['POST'])
def login_driver():
    try:
        data = request.get_json()

        username = data.get('username')
        password = data.get('password')

        # Query user by username
        user = User.query.filter_by(username=username).first()

        if user and bcrypt.check_password_hash(user.password, password):
            # Generate JWT token
            token = jwt.encode({'user_id': user.user_id}, app.config['SECRET_KEY'], algorithm='HS256')
            return jsonify({'success': True, 'message': 'Login successful', 'token': token}), 200
        else:
            return jsonify({'success': False, 'message': 'Invalid username or password'}), 400

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

# Registration endpoint (already implemented)
@app.route('/api/driver/register', methods=['POST'])
def register_driver():
    data = request.get_json()

    # Extract data from JSON request
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone')
    license = data.get('license')
    vehicle_number = data.get('vehicleNumber')
    vehicle_type = data.get('vehicleType')

    # Validate input data
    if not username or not email or not password or not phone or not license or not vehicle_number or not vehicle_type:
        return jsonify({'success': False, 'message': 'Missing required fields'}), 400

    # Hash the password before storing it
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create new User and Driver objects
    new_user = User(username=username, email=email, password=hashed_password, phone=phone)
    new_driver = Driver(license_number=license, vehicle_number=vehicle_number, vehicle_type=vehicle_type)

    try:
        # Add new User and Driver to the database
        db.session.add(new_user)
        db.session.commit()

        # Assign user_id to the driver
        new_driver.user_id = new_user.user_id

        # Add new Driver to the database
        db.session.add(new_driver)
        db.session.commit()

        return jsonify({'success': True, 'message': 'Registration successful'}), 200
    except IntegrityError:
        db.session.rollback()
        return jsonify({'success': False, 'message': 'Registration failed: Email already exists'}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': f'Registration failed: {str(e)}'}), 500

# Dashboard endpoint
@app.route('/api/driver/dashboard', methods=['GET'])
def driver_dashboard():
    try:
        token = request.headers.get('Authorization').split()[1]  # Extract token from Authorization header
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        user_id = payload['user_id']
        
        # Query driver details based on user_id from JWT
        driver = Driver.query.filter_by(user_id=user_id).first()

        if not driver:
            return jsonify({'success': False, 'message': 'Driver not found'}), 404
        
        # Dashboard summary data
        dashboard_summary = {
            'driver_name': driver.user.username,
            'license_number': driver.license_number,
            'vehicle_number': driver.vehicle_number,
            'vehicle_type': driver.vehicle_type,
            'today_earnings': 0.0,  # Replace with actual logic to calculate earnings for today
            'earnings_history': [],
            'wallet_earnings': 0.0,  # Replace with actual logic to calculate wallet earnings
            'completed_rides': 0,  # Replace with actual logic to count completed rides
            'help_and_support': 'Contact support@example.com for assistance'
        }

        return jsonify({'success': True, 'data': dashboard_summary}), 200

    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
