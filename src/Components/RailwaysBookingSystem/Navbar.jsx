import React from 'react';

const RailwayReservationSystem = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav>
                <img src="../image/rail logo1.png" alt="Indian Railway Logo" className="logo" />
                <h1>भारतीय रेल (Bharti Rail)</h1>
                <a href="Index.html">Home</a>
                <a href="user.html">User</a>
                <a href="train.html">Trains</a>
                <a href="booking.html">Book Tickets</a>
                <a href="category.html">Category</a>
                <a href="Passenger.html">Passengers</a>
                <a href="Payment.html">Payment</a>
                <a href="Notification.html">Notifications</a>
            </nav>

            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to भारतीय रेल</h1>
                <p>Book your train tickets with ease and travel across the country.</p>
                <a href="Login.html">
                    <button className="hero-btn">Login to Book Tickets</button>
                </a>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 भारतीय रेल (Bharti Rail). All rights reserved.</p>
                <div className="running-train">
                    <span>🚂 भारतीय रेल: Connecting the Nation with Every Journey 🚂</span>
                </div>
            </footer>
        </div>
    );
};

export default RailwayReservationSystem;
