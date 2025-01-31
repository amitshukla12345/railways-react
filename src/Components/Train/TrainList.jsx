import React, { useEffect, useState } from 'react';
import { getTrain } from './TrainService'; // Assuming this function gets train data
import Train from './Train';

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for train name search
  const [destination, setDestination] = useState(""); // State for destination search
  const [date, setDate] = useState(""); // State for date search
  const [source, setSource] = useState(""); // State for source search
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch trains data on component mount
  useEffect(() => {
    getTrain()
      .then(data => {
        setTrains(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch train data:", err);
        setError("Failed to fetch train data. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Handle input changes
  const handleSearch = (event) => setSearchQuery(event.target.value);
  const handleDestination = (event) => setDestination(event.target.value);
  const handleDate = (event) => setDate(event.target.value);
  const handleSource = (event) => setSource(event.target.value);

  // Handle sort order toggle
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
  };

  // Filter and sort trains
  const filteredTrains = trains.filter((train) => {
    const matchesTrainName = train.trainName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDestination = !destination || train.destination.toLowerCase().includes(destination.toLowerCase());
    const matchesDate = !date || train.date === date;
    const matchesSource = !source || train.source.toLowerCase().includes(source.toLowerCase());
    return matchesTrainName && matchesDestination && matchesDate && matchesSource;
  });

  const sortedTrains = filteredTrains.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.trainName.localeCompare(b.trainName);
    } else {
      return b.trainName.localeCompare(a.trainName);
    }
  });

  // Show loading state
  if (loading) return <p>Loading...</p>;

  // Show error state
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {/* Search Inputs */}
      <input
        type="text"
        placeholder="Search by Train Name"
        value={searchQuery}
        onChange={handleSearch}
        style={{ padding: "4px", marginBottom: "10px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Search by Destination"
        value={destination}
        onChange={handleDestination}
        style={{ padding: "4px", marginLeft: "10px", marginBottom: "10px", width: "200px" }}
      />
      <input
        type="date"
        value={date}
        onChange={handleDate}
        style={{ padding: "4px", marginLeft: "10px", marginBottom: "10px" }}
      />
      <input
        type="text"
        placeholder="Search by Source"
        value={source}
        onChange={handleSource}
        style={{ padding: "4px", marginLeft: "10px", marginBottom: "10px", width: "200px" }}
      />
      <button onClick={handleSort} style={{ padding: "4px", marginLeft: "10px" }}>
        Sort {sortOrder === "asc" ? "A to Z" : "Z to A"}
      </button>


      <h1>Total Trains{trains.length}</h1>
      {/* Train Table */}
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
          {sortedTrains.length > 0 ? (
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

export default TrainList;
