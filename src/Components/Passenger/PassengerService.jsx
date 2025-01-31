const API_LINK = "http://localhost:8080/passengers";

export const addPassenger = (passenger) => {
  return fetch(API_LINK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(passenger),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error during request:", error);
    });
};
