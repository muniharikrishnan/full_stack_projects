import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet, faTag, faHeadset, faGear, faCar, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import '../styles/MyTrips.css'; // Ensure you have appropriate styles in this file

const MyTrips = () => {
    return (
        <div>
            {/* <header className="header">
                <nav className="navbar">
                    <Link to="/" className="logo">TAXI</Link>
                    <Link to="/"><FontAwesomeIcon icon={faCar} style={{ color: '#f0b429' }} /> Ride</Link>
                </nav>
                <div className="navbar2">
                    <Link to="/trips">My Trips</Link>
                    <div className="dropdown">
                        <button className="btn btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75rem', color: '#f0b429' }} />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/wallet"><FontAwesomeIcon icon={faWallet} /> Wallet</Link>
                            <Link className="dropdown-item" to="#"><FontAwesomeIcon icon={faTag} /> Promos</Link>
                            <Link className="dropdown-item" to="/account"><FontAwesomeIcon icon={faUser} /> Manage account</Link>
                            <Link className="dropdown-item" to="/support"><FontAwesomeIcon icon={faHeadset} /> Support</Link>
                            <Link className="dropdown-item" to="/settings"><FontAwesomeIcon icon={faGear} /> Settings</Link>
                        </div>
                    </div>
                </div>
            </header> */}
            <div className="trips-body" style={{ marginTop: '20px' }}>
                <div className="row g-3">
                    <div className="col-sm-2">
                        <div className="container-trips">
                            <Link to="/tax">Tax profile</Link>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="head">
                            <h1>PAST</h1>
                            <div className="drop">
                                <div className="dropdown">
                                    <button className="btn btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '1rem', color: '#2e2e2e' }} /> Personal
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#"> Personal</a>
                                        <a className="dropdown-item" href="#"> Business</a>
                                        <a className="dropdown-item" href="#"> Family</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{ fontSize: '1rem', color: '#2e2e2e' }} /> All Trips
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#"> All trips</a>
                                        <a className="dropdown-item" href="#"> Past 30 days</a>
                                        <a className="dropdown-item" href="#"> May</a>
                                        <a className="dropdown-item" href="#"> April</a>
                                        <a className="dropdown-item" href="#"> March</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history">
                            <div className="card">
                                <img src="src\assets\taxibg3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">You have not taken any rides yet, take your first ride</p>
                                    <Link to="/" id="book">Book Now</Link>
                                </div>
                            </div>
                            <div className="past">
                                <div className="r1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <img src="src\assets\taxibg.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Get a ride in minutes</h5>
                                <p className="card-text">Book a Taxi from a web browser, no app install necessary.</p>
                                <Link to="/" id="book">Request a ride now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTrips;
