import React from 'react'
import { useState } from 'react';
import { Data } from '../component/Data';
const List = () => {
  const [searchName, setSearchName] = useState("")
  
  const FilteredNames = Data.filter(
    ({firstName,lastName}) => firstName.toLowerCase().includes(searchName.toLowerCase())|| lastName.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div style= {{justifyContent: "center", marginTop: "30px",marginLeft: "200px", marginRight: "200px"}}>
    <div style= {{ backgroundColor: "blueviolet"}}>
      <div style={{paddingLeft: "40px",paddingTop: "20px", paddingBottom: "5px" }}>
      <input  type="text" placeholder='search by Name' style={{ fontSize: "12px", height: "30px", width: "85%", borderRadius: "10px", border: "1px solid",paddingLeft: "20px", marginLeft: "35px"}} value={searchName} onChange={({target}) => setSearchName(target.value)} />
      <ul style={{ display: "grid", gridTemplateColumns: "400px 400px", gridGap: "10px",paddingRight: "20px", fontSize: "15px" }}>
        {FilteredNames.map(({picture, id, firstName, lastName}) =>(
          <div style={{ padding: "10px", display: "flex", backgroundColor: "white", borderRadius: "10px" }} >
          <img src={picture} alt= 'web'/>
          <div style={{display: "block", marginLeft: "10px", marginTop: "-20px" }}>
          <p>{id}</p>
          <p>{firstName} {lastName}</p>
          </div>
        
        </div>
          
        ))}
      </ul>
      </div>
    </div>
    </div>
  )
}

export default List