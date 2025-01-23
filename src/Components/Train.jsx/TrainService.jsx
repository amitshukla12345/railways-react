const API_LINK = "http://localhost:8080/trains";


export const getTrain =()=>{
    
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["trains"]);
       

}

