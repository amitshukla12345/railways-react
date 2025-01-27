const API_LINK = "http://localhost:8080/trains";

export const addTrain = (trainData) => {
  return fetch(API_LINK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(trainData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to add train: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Train added successfully:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error adding train:", error);
      throw error; // Re-throw the error for further handling
    });
};
