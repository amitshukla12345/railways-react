import React from 'react';

function Navbar() {
  return (
    <div>
      <nav>
        <img
          src="../image/rail logo1.png"
          alt="Railway Logo"
          className="logo" // Corrected: Changed 'class' to 'className'
        />
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
    </div>
  );
}

export default Navbar;
