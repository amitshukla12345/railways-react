const API_LINK = "http://localhost:8080/trains";

// Fetch all trains
export const getTrain = () => {
  return fetch(API_LINK)
    .then(response => response.json())
    .then(data => data["_embedded"]["trains"]);
}
