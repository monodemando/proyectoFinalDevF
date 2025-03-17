import Button from "../atoms/button";
import Input from "../atoms/input";
import Select from "../atoms/select";
import { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const {options, setSearchTerm, searchTerm, onStatusChange} = props

    const sendValues = () => {
        setSearchTerm(searchValue)
    }
    
    return(
        <div id="search">
            <div id="search">
                <Input type="text" placeholder="search a character" onChange={(e) => setSearchValue(e.target.value)}></Input>
                <Button id="search" onClick={sendValues}> Search</Button>
            </div>
            
            <div id="selects">
                <Select name="status" options={options}  valueChange={onStatusChange}></Select>
               
            </div>
        </div>
        
        
    )
}

export default Search;