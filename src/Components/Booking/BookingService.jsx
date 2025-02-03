const API_LINK = "http://localhost:8080/booking";

// Fetch all trains
export const getBooking = () => {
  return fetch(API_LINK)
    .then(response => response.json())
    .then(data => data["_embedded"]["bookings"]);
}



export const addBooking = (trainData) => {
  return fetch(API_LINK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trainData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to book train: ${response.statusText}`);
      }
      return response.json();
    })
    
    .then((data) => {
      console.log("Train book successfully:", data);
      return data;
    })
   
};

