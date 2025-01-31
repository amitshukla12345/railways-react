import React, { useState } from 'react';
import { addTrain as addTrainService } from './AddTrainService'; // Correct import

function AddTrain() {
  const [formData, setFormData] = useState({
    trainName: '',
    source: '',
    destination: '',
    departure: '',
    arrival: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Disable button during submission

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Disable form during submission

    try {
      // Call the service and await its completion
      await addTrainService(formData);
      alert('Train added successfully!'); // Alert after a successful response
      setFormData({
        trainName: '',
        source: '',
        destination: '',
        departure: '',
        arrival: '',
      }); // Reset form
    } catch (error) {
      alert(`Failed to add train: ${error.message}`);
    } finally {
      setIsSubmitting(false); // Re-enable form
    }
  };

  return (
    <div>
      <div id="train-section">
        <form className="train-form" onSubmit={handleSubmit}>
          <h2>Add Train Details</h2>


          {/* Train Name */}
          <label htmlFor="trainName">Train Name:</label>
          <input
            type="text"
            id="trainName"
            placeholder="Enter Train Name"
            value={formData.trainName}
            onChange={handleInputChange}
            required
          />

          {/* Source */}
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            placeholder="Enter Source Station"
            value={formData.source}
            onChange={handleInputChange}
            required
          />

          {/* Destination */}
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            placeholder="Enter Destination Station"
            value={formData.destination}
            onChange={handleInputChange}
            required
          />

          {/* Departure Time */}
          <label htmlFor="departure">Departure Time:</label>
          <input
            type="datetime-local"
            id="departure"
            value={formData.departure}
            onChange={handleInputChange}
            required
          />

          {/* Arrival Time */}
          <label htmlFor="arrival">Arrival Time:</label>
          <input
            type="datetime-local"
            id="arrival"
            value={formData.arrival}
            onChange={handleInputChange}
            required
          />

          {/* Submit Button */}
          <button type="submit" id="add-train-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Train'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTrain;
