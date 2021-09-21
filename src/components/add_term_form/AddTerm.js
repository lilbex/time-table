import React, { useState } from "react";

export const AddTerm =() => {
 


  return (
    <div className="App">
      <h4 style={{textAlign:'center', color:"white"}}>Add Term(e.g 2019 Term 2)</h4>
          <div className="form-group" style={{display:'flex', flexDirection:'row', height:"40px", width:'90%',margin:'0 auto',}}>
            <input
              className="form-control"
              name="term"
			        placeholder="Enter Term..."
            />
            <div className="">
             <button  style={{width:'85px', height:"40px"}} >Add</button>
            </div>
          </div>
    </div>
    
  );
}
