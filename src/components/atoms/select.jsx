import { useState } from "react"



const Select = (props) => {
    const {name, options, valueChange} = props

    const setValueChange = (event) => {
      if (options[0].value === "fs") {
          if (event.target.value === "fs") {
              valueChange("");
          } else if (event.target.value === "a") {
              valueChange("alive");
          } else if (event.target.value === "d") {
              valueChange("dead");
          } else if (event.target.value === "u") {
              valueChange("unknown");
          }
      } else if (options[0].value === "fg") {
          if (event.target.value === "fg") {
              valueChange("");
          } else if (event.target.value === "f") {
              valueChange("female");
          } else if (event.target.value === "m") {
              valueChange("male");
          } else if (event.target.value === "gl") {
              valueChange("genderless");
          } else if (event.target.value === "u") {
              valueChange("unknown");
          }
      } else if (options[0].value === "fbs") {
          if (event.target.value === "fbs") {
              valueChange("");
          } else if (event.target.value === "h") {
              valueChange("human");
          } else if (event.target.value === "al") {
              valueChange("alien");
          } else if (event.target.value === "hu") {
              valueChange("humanoid");
          } else if (event.target.value === "r") {
              valueChange("robot");
          } else if (event.target.value === "an") {
              valueChange("animal");
          } else if (event.target.value === "c") {
              valueChange("cronenberg");
          } else if (event.target.value === "d") {
              valueChange("disease");
          } else if (event.target.value === "m") {
              valueChange("mythological%20creature");
          } else if (event.target.value === "pb") {
              valueChange("poopybutthole");
          } else if (event.target.value === "u") {
              valueChange("unknown");
          }
      }
  };
  


    

    
    
    return (
      <select  name={name} id="select" onChange={setValueChange}>
        {options.map((option) => {
            return  <option key={option.id} value={option.value}>{option.text}</option>
           
        })}
      </select>
      
        

       
    
       
    
    )
}

export default Select;