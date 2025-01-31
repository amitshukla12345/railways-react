const API_LINK = "http://localhost:8080/categories";




export const addCategory = (category) => {

    return fetch(API_LINK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category)
    }).then(data=>data.json())
        .then(data=>{
            console.log(data)
            return data
        })

}
