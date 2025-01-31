import React, { useEffect, useState } from "react";
import RailwayFormAdmin from "./RailwayFormAdmin";
import { getTrain } from "../Train/TrainService";
import RailwayItemAdmin from "./RailwayItemAdmin";

function RailwayListAdmin() {
  const [trains, setTrains] = useState([]); // Train data
  const [searchQuery, setSearchQuery] = useState(""); // Train name search
  const [destination, setDestination] = useState(""); // Destination search
  const [date, setDate] = useState(""); // Date search
  const [source, setSource] = useState(""); // Source search
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order
  const [selectedTrain, setSelectedTrain] = useState(null); // Selected train

  // Fetch train data
  const fetchTrains = async () => {
    try {
      const data = await getTrain();
      setTrains(data);
    } catch (error) {
      console.error("Error fetching trains:", error);
    }
  };

  useEffect(() => {
    fetchTrains();
  }, []);

  // Handle input changes
  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleDestination = (e) => setDestination(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleSource = (e) => setSource(e.target.value);

  // Toggle sort order
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter trains
  const filteredTrains = trains.filter((train) => {
    const matchesTrainName = train.trainName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDestination = !destination || train.destination.toLowerCase().includes(destination.toLowerCase());
    const matchesDate = !date || train.date === date;
    const matchesSource = !source || train.source.toLowerCase().includes(source.toLowerCase());

    return matchesTrainName && matchesDestination && matchesDate && matchesSource;
  });

  // Sort trains
  const sortedTrains = [...filteredTrains].sort((a, b) => {
    return sortOrder === "asc"
      ? a.trainName.localeCompare(b.trainName)
      : b.trainName.localeCompare(a.trainName);
  });

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
        <input
          type="text"
          placeholder="Search by Destination"
          value={destination}
          onChange={handleDestination}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
        <input
          type="date"
          value={date}
          onChange={handleDate}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Search by Source"
          value={source}
          onChange={handleSource}
          style={{ padding: "5px", marginRight: "10px", width: "200px" }}
        />
        <button onClick={handleSort} style={{ padding: "5px" }}>
          Sort {sortOrder === "asc" ? "A to Z" : "Z to A"}
        </button>
      </div>

      {/* Train Form & Table */}
      <div className="row mt-4">
        <div className="col-md-4">
          {/* Train Form */}
          <RailwayFormAdmin selectedTrain={selectedTrain} setSelectedTrain={setSelectedTrain} />
        </div>

        <div className="col-md-8">
          <h3>Total Trains: {sortedTrains.length}</h3>

          {/* Train Table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Train Name</th>
                <th>Destination</th>
                <th>Source</th>
                <th>Departure</th>
                <th>Arrival</th>
              </tr>
            </thead>
            <tbody>
              {sortedTrains.map((train) => (
                <RailwayItemAdmin
                  key={train.id}
                  trainName={train.trainName}
                  destination={train.destination}
                  source={train.source}
                  departure={train.departure}
                  arrival={train.arrival}
                  date={new Date(train.date).toLocaleString()}
                  train_link={train._links.self.href}
                  onSelectTrain={() => setSelectedTrain(train)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RailwayListAdmin;
