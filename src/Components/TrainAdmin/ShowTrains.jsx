import React, { useState, useEffect } from "react";
import { getTrain } from "../Train/TrainService";
import Train from "../Train/Train";

function ShowTrains() {
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState(null);

  const fetchTrains = () => {
    getTrain()
      .then((data) => {
        setTrains(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch train data:", err);
        setError("Failed to load train data. Please try again.");
      });
  };

  const onSelectUpdate = (trainId) => {
    console.log("Update train with ID:", trainId);
    // Logic to update train details
  };

  const onDelete = (trainId) => {
    console.log("Delete train with ID:", trainId);
    // Logic to delete train
  };

  useEffect(() => {
    fetchTrains();

    const interval = setInterval(() => {
      console.log("Refreshing train data...");
      fetchTrains();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Train Schedule</h2>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <h1>{trains.length}</h1>
      <table className="table" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">Train Name</th>
            <th scope="col">Destination</th>
            <th scope="col">Source</th>
            <th scope="col">Departure</th>
            <th scope="col">Arrival</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trains.length > 0 ? (
            trains.map((train) => (
              <tr key={train.id}>
                <Train
                  trainName={train.trainName}
                  destination={train.destination}
                  source={train.source}
                  departure={train.departure}
                  arrival={train.arrival}
                  date={new Date(train.date).toLocaleString()}
                />
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => onSelectUpdate(train.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(train.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No trains found.{" "}
                <button className="btn btn-primary" onClick={fetchTrains}>
                  Retry
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTrains;
