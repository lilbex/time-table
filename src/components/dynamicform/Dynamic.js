import React, { useState } from "react";

function Dynamic() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

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
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="App">
      <h3 style={{textAlign:'center'}}><a href="https://cluemediator.com">Clue Mediator</a></h3>
      {inputList.map((x, i) => {
        return (
          <div className="form-group" style={{display:'flex', flexDirection:'row', width:'40%',margin:'0 auto'}}>
            <input
            className="form-control"
              name="firstName"
			  placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="form-control"
              name="lastName"
			  placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="btn btn-primary"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button className="btn btn-primary" style={{width:'85px'}} onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ width:'40%', margin:'0 auto', padding:'20px'}}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default Dynamic;