import React, { useState, useEffect } from 'react';
import { addTrain } from '../AddTrain/AddTrainService';
import { updateTrain } from '../Train/TrainService';

function RailwayFormAdmin({ selectedTrain, setSelectedTrain }) {
    const [formData, setFormData] = useState({
        trainName: '',
        source: '',
        destination: '',
        departure: '',
        arrival: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Disable button during submission

    useEffect(() => {
        if (selectedTrain) {
            setFormData(selectedTrain);
            console.log("Train",selectedTrain)

        }
        else{
            console.log("No")
        }
    }, [selectedTrain]); // Dependency array ensures this runs when selectedTrain changes
    
    

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable form during submission

                await addTrain(formData);
                alert('Train added successfully!');
            
            setFormData({
                trainName: '',
                source: '',
                destination: '',
                departure: '',
                arrival: '',
            }); // Reset form
            // Reset to Add mode after successful submission
            setSelectedTrain(null); // Optionally clear selected train after update
        
    };

    

    //======================================================

    const updateHandler= (e) => {
        e.preventDefault();
        console.log("Update Handler called");
        //console.log(selectedProduct._links.self.href)
        updateTrain(selectedTrain._links.self.href, {
            trainName: e.target.trainName.value,
            source: e.target.source.value,
            destination: e.target.destination.value,
            departure: e.target.departure.value,
            arrival:e.target.arrival.value
        })
    }


   //=======================================================

    return (
        <div>
           <form className="train-form" onSubmit={selectedTrain ? updateHandler : handleSubmit}>

                <div id="train-section">
                    <div className="train-form">
                        <h2>{selectedTrain ? 'Update Train Details' : 'Add Train Details'}</h2>

                        {/* Train Name */}
                        <label htmlFor="trainName">Train Name:</label>
                        <input
                            type="text"
                            id="trainName"
                            name="trainName"
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
                            name="source"
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
                            name="destination"
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
                            name="departure"
                            value={formData.departure}
                            onChange={handleInputChange}
                            required
                        />

                        {/* Arrival Time */}
                        <label htmlFor="arrival">Arrival Time:</label>
                        <input
                            type="datetime-local"
                            id="arrival"
                            name="arrival"
                            value={formData.arrival}
                            onChange={handleInputChange}
                            required
                        />

                        {/* Submit Button */}
                        <button type="submit" id="add-train-btn" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RailwayFormAdmin;
