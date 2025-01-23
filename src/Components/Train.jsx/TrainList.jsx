import React, { useEffect, useState } from 'react';
import { getTrain } from './TrainService'; // Assuming this function gets train data
import Train from './Train';

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

  // Fetch trains data on component mount
  useEffect(() => {
    getTrain().then(data => {
      console.log(data);
      setTrains(data);
    });
  }, []);

  // Function to handle search query input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to toggle sort order between A to Z and Z to A
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  // Filter trains based on the search query
  const filteredTrains = trains.filter((train) =>
    train.trainName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort the filtered trains based on the selected sort order
  const sortedTrains = filteredTrains.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.trainName.localeCompare(b.trainName);
    } else {
      return b.trainName.localeCompare(a.trainName);
    }
  });

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Train Name"
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: "8px", marginBottom: "10px", width: "200px" }}
      />

      {/* Sort Button */}
      <button onClick={handleSort} style={{ padding: "8px", marginLeft: "10px" }}>
        Sort {sortOrder === "asc" ? "A to Z" : "Z to A"}
      </button>

      {/* Table */}
      <table className="table" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">TrainName</th>
            <th scope="col">Destination</th>
            <th scope="col">Source</th>
            <th scope="col">Departure</th>
            <th scope="col">Arrival</th>
          </tr>
        </thead>
        <tbody>
          {sortedTrains.map((train, index) => (
            <Train
              key={index}
              trainName={train.trainName}
              destination={train.destination}
              source={train.source}
              departure={train.departure}
              arrival={train.arrival}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainList;
