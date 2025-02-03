import React, { useEffect, useState } from "react";
import { getTrain } from "../GetTrain/GetTrainService"; // Adjust the import path as needed
import Booking from "../Booking/Booking"; // Import Booking component

function GetTrain() {
  const [trains, setTrains] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Train name search
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order state
  const [selectedTrain, setSelectedTrain] = useState(null); // State for selected train
  const [showBooking, setShowBooking] = useState(false); // State to toggle Booking component

  useEffect(() => {
    async function fetchTrains() {
      try {
        const data = await getTrain(); // Fetch train data
        setTrains(data);
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    }

    fetchTrains();
  }, []);

  // Handle input changes
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Filter trains based on search queries
  const filteredTrains = trains.filter((train) =>
    train.trainName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort trains
  const sortedTrains = [...filteredTrains].sort((a, b) =>
    sortOrder === "asc"
      ? a.trainName.localeCompare(b.trainName)
      : b.trainName.localeCompare(a.trainName)
  );

  // Open Booking Modal
  const onBookTicket = (train) => {
    setSelectedTrain(train);
    setShowBooking(true);
  };

  // Close Booking Modal
  const closeBookingModal = () => {
    setShowBooking(false);
  };

  return (
    <div className="container">
      {/* Search Inputs */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Train Name"
          value={searchQuery}
          onChange={handleSearch}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Destination</th>
            <th>Source</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          {sortedTrains.map((train) => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.destination}</td>
              <td>{train.source}</td>
              <td>{train.departure}</td>
              <td>{train.arrival}</td>
              <td>
                <button className="btn btn-success" onClick={() => onBookTicket(train)}>
                  Book Ticket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Booking Modal */}
      {showBooking && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeBookingModal}>✖</button>
            <Booking train={selectedTrain} />
          </div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            max-height: 90vh; /* Ensure it fits within viewport */
            overflow-y: auto; /* Allow scrolling if content is too tall */
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default GetTrain;
