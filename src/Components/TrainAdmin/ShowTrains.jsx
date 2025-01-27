import React, { useState,useEffect, } from 'react'; // Added useState import4
import { getTrain } from '../Train/TrainService';
import Train from '../Train/Train';




function ShowTrains() {

      const [trains, setTrains] = useState([]);
      // Fetch trains data on component mount
        useEffect(() => {
          getTrain()
            .then(data => {
              setTrains(data);
            })
            .catch(err => {
              console.error("Failed to fetch train data:", err);
            });
        }, []);
      
    
 

    return (
        <div>{/* Train Table */}
        <table className="table" style={{ marginTop: "20px", width: "100%" }}>
            <thead>
                <tr>
                    <th scope="col">Train Name</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Source</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Arrival</th>
                </tr>
            </thead>
            <tbody>
            {trains.length > 0 ? (
trains.map((train, index) => (
              <Train
                key={index}
                trainName={train.trainName}
                destination={train.destination}
                source={train.source}
                departure={train.departure}
                arrival={train.arrival}
                date={train.date}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No trains found.
              </td>
            </tr>
          )}
            </tbody>
        </table>
        </div>
    );
}

export default ShowTrains;
