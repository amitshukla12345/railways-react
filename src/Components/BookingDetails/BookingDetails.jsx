import React, { useEffect, useState } from 'react';
import { getBookingDetails } from "../BookingDetails/BookingDetailsService"; // Ensure this function is correct

function BookingDetails() {
  const [bookings, setBookings] = useState([]); // Corrected state variable

  useEffect(() => {
    async function fetchBookingDetails() {
      try {
        const data = await getBookingDetails(); // Correct function call
        setBookings(data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    }

    fetchBookingDetails();
  }, []);

  return (
    <div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
           
            <th>Seat-Number</th>
            <th>Booking-Date</th>
            <th>Journey-Date</th>
            <th>Train Name</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => ( // Fixed the variable name
              <tr key={booking.id}>
                
                <td>{booking.seatNumber}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.journeyDate}</td>
                <td>{booking.trainId}</td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingDetails;
