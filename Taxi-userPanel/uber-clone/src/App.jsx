import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faWallet, faTag, faHeadset, faGear, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyTrips from './components/MyTrips'; // Import the MyTrips component

function App() {
  const [rideVisible, setRideVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const search = () => {
    setRideVisible(true);
  };

  const on = () => {
    setOverlayVisible(true);
  };

  const off = () => {
    setOverlayVisible(false);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <nav className="navbar">
            <Link to="/" className="logo">TAXI</Link>
            <Link to="/"><FontAwesomeIcon icon={faCar} style={{ color: '#f0b429' }} /> Ride</Link>
          </nav>
          <div className="navbar2">
            <Link to="/trips">My Trips</Link>
            <div className="dropdown">
              <button className="btn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75rem', color: '#f0b429' }} />
              </button>
              <div className="dropdown-content">
                <Link className="dropdown-item" to="/wallet"><FontAwesomeIcon icon={faWallet} /> Wallet</Link>
                <Link className="dropdown-item" to="/promos"><FontAwesomeIcon icon={faTag} /> Promos</Link>
                <Link className="dropdown-item" to="/account"><FontAwesomeIcon icon={faUser} /> Manage account</Link>
                <Link className="dropdown-item" to="/support"><FontAwesomeIcon icon={faHeadset} /> Support</Link>
                <Link className="dropdown-item" to="/settings"><FontAwesomeIcon icon={faGear} /> Settings</Link>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <div className="entire-body">
              <div className="row g-3">
                <div className="col-sm-3 r">
                  <div className="container">
                    <div className="container-text2">
                      <h1>Book a Ride!</h1>
                      <form action="">
                        <div className="input-icon">
                          <div className="fa">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                          <input type="text" id="pick" name="pick" placeholder="Enter your pickup location" autoComplete="off" />
                        </div>
                        <div className="input-icon">
                          <div className="fa">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                          <input type="text" id="drop" name="drop" placeholder="Enter your drop location" autoComplete="off" />
                        </div>
                        <button type="button" className="btn btn-outline-warning" id="search-button" onClick={search}>Search</button>
                      </form>
                    </div>
                  </div>
                </div>
                {rideVisible && (
                  <div className="col-sm-4 r" id="ride">
                    <div className="container-rides">
                      <h2 style={{ marginBottom: '30px' }}>Choose a Ride</h2>
                      <h4>Recommended</h4>
                      <div className="vehicle" tabIndex="0">
                        <img src="src/assets/TukTuk_Green_v1.png" alt="auto" />
                        <div className="details">
                          <h3>Auto</h3>
                          <p>4 mins away</p>
                          <h5>No bargaining, doorstep pick-up</h5>
                        </div>
                        <h4>₹481.21</h4>
                      </div>
                      <div className="vehicle" tabIndex="0">
                        <img src="src/assets/UberGo_v1.png" alt="auto" />
                        <div className="details">
                          <h3>Prime Sedan</h3>
                          <p>4 mins away</p>
                          <h5>No bargaining, doorstep pick-up</h5>
                        </div>
                        <h4>₹585.62</h4>
                      </div>
                      <div className="vehicle" tabIndex="0">
                        <img src="src/assets/package_UberComfort_new_2022.png" alt="auto" />
                        <div className="details">
                          <h3>Prime SUV</h3>
                          <p>4 mins away</p>
                          <h5>No bargaining, doorstep pick-up</h5>
                        </div>
                        <h4>₹544.02</h4>
                      </div>
                      <b><h3>Economy</h3></b>
                      <div className="vehicle" tabIndex="0">
                        <img src="src/assets/Uber_Moto_India1.png" alt="auto" />
                        <div className="details">
                          <h3>Bike</h3>
                          <p>4 mins away</p>
                          <h5>No bargaining, doorstep pick-up</h5>
                        </div>
                        <h4>₹264.08</h4>
                      </div>
                      <div className="payment">
                        <a href="#" onClick={on}><FontAwesomeIcon icon={faWallet} /> Add Payment Method</a>
                        <div className="req">
                          <button onClick={on}>Request Auto</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-sm 5 map">
                  <div className="container-map" style={{ backgroundColor:'white', color: 'blue' }}>
                    <h1>Map comes here!</h1>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/trips" element={<MyTrips />} />
        </Routes>
        {overlayVisible && (
          <div className="container-pay" id="overlay" onClick={off}>
            <div className="add-payment">
              <h1>Add Payment Method</h1>
              <div className="methods">
                <a href="#">PayTM</a>
                <a href="#">PayPal</a>
                <a href="#">Gift card</a>
                <a href="#">Cash</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
