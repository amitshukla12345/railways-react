const API_LINK = "http://localhost:8080/users";

// Fetch all users
export const getUser = () => {
    return fetch(API_LINK)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Debugging step
            return data["_embedded"]?.["users"] || []; // Ensure it returns an array
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            return []; // Return an empty array to prevent app crashes
        });
};
