import React, { useState } from 'react';
import { addPassenger } from '../Passenger/PassengerService';  // Corrected the typo in import

function Passenger() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    address: '',
    age: '',
  });

  const [error, setError] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submitting

    try {
      await addPassenger(formData); // Assuming addPassenger sends formData to an API
      alert('Passenger information submitted successfully!');
      setFormData({
        fullName: '',
        gender: '',
        email: '',
        address: '',
        age: '',
      }); // Res
      // et form data
    } catch (error) {
      setError('Failed to submit information. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div id="passenger-section">
      <form className="passenger-form" onSubmit={handleSubmit}>
        <h2>Passenger Information</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          min="0"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Passenger;
