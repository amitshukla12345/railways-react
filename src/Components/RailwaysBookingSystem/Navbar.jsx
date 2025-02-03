import React from 'react';
import logo from '../../image/rail logo1.png'
import { Link } from 'react-router-dom';


const RailwayReservationSystem = () => {
    return (
        
        <div>
            {/* Navigation Bar */}
            <nav>
                <img src={logo} alt="Indian Railway Logo" className="logo" />
                <h1>भारतीय रेल (Indian Railways)</h1>
                <Link to="/">Home</Link>
                <Link to="/register">User</Link>
                <Link to="/railway-admin">Trains</Link>
                <Link to="/gettrain">Book Tickets</Link>
                <Link to="/category">Category</Link>
                <Link to="/passenger">Passengers</Link>
                <a href="Payment.html">Payment</a>
                <a href="Notification.html">Notifications</a>
            </nav>


            
        </div>
    );
};

export default RailwayReservationSystem;
