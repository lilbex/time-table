import React, { useState } from "react";

export const AddClassForm =() => {
  const [inputList, setInputList] = useState([{ term: "",}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { term: "", }]);
  };

  return (
    <div className="App">
      <h4 style={{textAlign:'center', color:"white"}}>Add Classes to term</h4>
      {inputList.map((x, i) => {
        return (
          <div className="form-group" style={{display:'flex', flexDirection:'row', height:"40px", width:'90%',margin:'0 auto',}}>
            <input
              className="form-control"
              name="term"
			        placeholder="Enter Term..."
              value={x.term}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="">
              {inputList.length !== 1 && <button style={{width:'85px', height:"40px"}} onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button  style={{width:'85px', height:"40px"}} onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      {/* <div style={{ width:'40%', margin:'0 auto', padding:'20px'}}>{JSON.stringify(inputList)}</div> */}
    </div>
    
  );
}
