import React from 'react'

function Train({trainName,destination,source,departure,arrival}) {
  return (

  

<tr className="p-3">
  <td>{trainName}</td>
  <td>{destination}</td>
  <td>{source}</td>
  <td>{departure}</td>
  <td>{arrival}</td>

</tr>



  )
}

export default Train