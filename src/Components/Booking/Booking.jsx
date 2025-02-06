import React, { useState } from "react";
import { addBooking } from "../Booking/BookingService"; // Ensure the correct path
import { addPassenger } from "../Passenger/PassengerService";
import { allocatePassenger, allocateSeat } from "../BookingDetails/BookingDetailsService";

function Booking({ train }) {
  const [formData, setFormData] = useState({
    bookingId: "",
    userName: train.trainName,
    bookingDate: "",
    seatNumber: "",
    paymentStatus: "",
    bookingStatus: "",
    pnrNumber: "",
    classType: "", // Renamed from 'class' to avoid reserved keyword issue
    fullName: "",
    email: "",
    address: "",
    age: "",
    gender: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      const booking=await addBooking(formData);
      console.log(train._links.self.href,booking._links.train.href)
      const status=await allocateSeat(train._links.self.href,booking._links.train.href)

      
      // Assuming this method handles booking and saving passenger details
      setConfirmationMessage("Thank you! Your ticket has been booked.");
      const passanger=await addPassenger(formData)
      console.log("Passenger",passanger)
      console.log("Booking",booking)
      setConfirmationMessage("Thank you! Passanger created sccessfully");
      console.log(passanger._links.self.href+"/booking",booking._links.self.href)
      allocatePassenger(passanger._links.self.href+"/booking",booking._links.self.href)
  

      setFormData({
        userName: "",
        bookingDate: "",
        seatNumber: "",
        classType: "",
        fullName: "",
        email: "",
        address: "",
        age: "",
        gender: "",
      });
    } catch (error) {
      setConfirmationMessage("Error booking ticket. Please try again.");
    }
  };

  return (
    <div id="booking-section">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book Your Train Tickets</h2>

        <label htmlFor="userName">Train Name:</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          placeholder="Enter Train Name"
          required
        />

        <label htmlFor="seatNumber">Seat Number:</label>
        <input
          type="number"
          name="seatNumber"
          value={formData.seatNumber}
          onChange={handleInputChange}
          placeholder="Enter Seat Number"
          required
        />

        <label htmlFor="classType">Select Class:</label>
        <select name="classType" value={formData.classType} onChange={handleInputChange} required>
          <option value="" disabled>Select Class</option>
          <option value="sleeper">Sleeper</option>
          <option value="ac">AC</option>
          <option value="general">General</option>
        </select>

        <label htmlFor="fullName">Passenger Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter Full Name"
          required
        />

        <label htmlFor="email">Passenger Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
          required
        />


        <label htmlFor="address">Passenger Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter Address"
          required
        />

        <label htmlFor="age">Passenger Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter Age"
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Book Ticket</button>

        {confirmationMessage && <p style={{ color: "green", marginTop: "10px" }}>{confirmationMessage}</p>}
      </form>
    </div>
  );
}

export default Booking;
