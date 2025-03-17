import { useState } from "react"



const Select = (props) => {
    const {name, options, valueChange} = props

    const setValueChange = (event)=>{
      if(options[0].value === "e"){
        if(event.target.value === "e"){
          valueChange("")
        }else if(event.target.value === "a"){
          valueChange("alive")
        }else if(event.target.value === "d"){
          valueChange("dead")
        }else if(event.target.value === "u"){
          valueChange("unknown")
        }
      }
    }


    

    
    
    return (
      <select  name={name} id="select" onChange={setValueChange}>
        {options.map((option) => {
            return  <option key={option.value} value={option.value}>{option.text}</option>
           
        })}
      </select>
      
        

       
    
       
    
    )
}

export default Select;