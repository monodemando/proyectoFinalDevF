import { useState } from "react"



const Select = (props) => {
    const {name, options} = props


    

    
    
    return (
      <select  name={name} id="select">
        {options.map((option) => {
            return  <option key={option.value} value={option.value}>{option.text}</option>
           
        })}
      </select>
      
        

       
    
       
    
    )
}

export default Select;