import React, { useState } from "react";
import { ButtonWithoutArrow } from "../buttons/Button";

function AddTeacherForm() {
  const [inputList, setInputList] = useState([{ firstName: "2019/2020 Term 2 JSS1 Maths", lastName: "" }]);

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
    <div >
      <h3 style={{textAlign:'center', color:"white"}}>Add Subject</h3>
      {inputList.map((x, i) => {
        return (
          <div className="form-group" style={Input}>
            <input
            className="form-control"
              name="firstName"
			        placeholder="Subject"
              // value={x.firstName}
              value="2019/2020 Term 2 JSS1 Maths"
              readOnly
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="form-control"
              name="lastName"
			        placeholder="Name of Teacher"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
          </div>
        );
      })}
      <div style={{display:'flex',flexDirection:'row'}}>
      <ButtonWithoutArrow title="Save and Continue" />
      <ButtonWithoutArrow title="Generate Time-Table" />
      <ButtonWithoutArrow title="Save and Exit"/>
      </div>
      

      <div style={{ width:'40%', margin:'0 auto', padding:'20px'}}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

const Input={display:'flex', flexDirection:'row', width:'700px',margin:'0 auto'}

export default AddTeacherForm;