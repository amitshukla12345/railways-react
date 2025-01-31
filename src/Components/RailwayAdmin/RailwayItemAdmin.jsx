import React, { useState } from "react";
import {  deleteTrains, getTrain, getTrainById } from "../Train/TrainService";

function RailwayItemAdmin({ onSelectTrain,train_link, trainName, destination, source, departure, arrival }) {
  let [train, setSelectedTrain] =useState(null)
  const onSelectUpdate= async (link)=>{

    let train=await getTrainById(link);
    onSelectTrain(train);
  }
  const onSelectDelete = async (train_id_link) => {  
    const deletedTrain=await deleteTrains(train_id_link)
    
  };
  

  return (
    <tr className="p-3">
      <td>{trainName}</td>
      <td>{destination}</td>
      <td>{source}</td>
      <td>{departure}</td>
      <td>{arrival}</td>

      {/* Update Button */}
     <td>
     <button className="btn-1 btn-success"onClick={()=> onSelectUpdate(train_link)}>Update</button>
      </td> 

      {/* Delete Button */}
     <td>
     <button className='btn-1 btn-danger' onClick={() => onSelectDelete(train_link)}> 
  Delete
</button>
     </td>

    </tr>
    
  );
}

export default RailwayItemAdmin;
