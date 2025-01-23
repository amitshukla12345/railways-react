const API_LINK = "http://localhost:8080/users";




export const addUser =(user)=>{
    
    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
    }).then(data=>data.json())
    .then(data=>{
        console.log(data)
        return data
    })

}
