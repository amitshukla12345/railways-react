import { data } from "react-router-dom";

const API_LINK = "http://localhost:8080/trains";

// Fetch all trains
export const getTrain = () => {
    return fetch(API_LINK)
        .then(data => data.json())
        .then(data => data["_embedded"]["trains"]);
}

// Deleting Trains
export const deleteTrains = (train_id_link) => {
    return fetch(train_id_link, { method: "DELETE" });
}

// Get Train by ID (Updated)
export const getTrainById = (train_link) => {
    return fetch(train_link)  // Replace `train(train_link)` with `fetch(train_link)`
        .then((data) => data.json())
        .then((data) => data);
}

// Update Train
export const updateTrain = (train_id_link, train) => {
    return fetch(train_id_link, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(train)
    });
}

export const findByOrderByTrainNameAsc=()=>{
    return fetch("//localhost:8080/trains/search/findByOrderByTrainNameAsc")
    .then (data=>data.json())
    .then(data=> data["_embedded"]["Trains"])
}

