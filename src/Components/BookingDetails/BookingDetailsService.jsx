const API_LINK = "http://localhost:8080/booking";

// Fetch all bookings
export const getBookingDetails = async () => {
  try {
    const response = await fetch(API_LINK);
    if (!response.ok) {
      throw new Error("Failed to fetch booking details");
    }
    const data = await response.json();
    return data["_embedded"]?.["bookings"] || []; // Adjust key as per API response
  } catch (error) {
    console.error("Error fetching booking details:", error);
    return [];
  }
};


export const allocateSeat = (TrainLink, bookingLink) => {
    return fetch(bookingLink, {
        method: "PUT",
        headers: {"Content-Type": "Text/uri-list"},
        body: TrainLink
    })
};



export const allocatePassenger = (passenger_link, bookingLink) => {
    console.log(passenger_link,bookingLink)
    return fetch(passenger_link, {
        method: "PUT",
        headers: {"Content-Type": "Text/uri-list"},
        body: bookingLink
    })
};




