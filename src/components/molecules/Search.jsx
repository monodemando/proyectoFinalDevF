import Button from "../atoms/button";
import Input from "../atoms/input";
import Select from "../atoms/select";
import { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")

    const {optionsStatus, optionsGender, setSearchTerm, searchTerm, onStatusChange, onGenderChange, optionsSpecies, onSpeciesChange} = props

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
                <Select name="status" options={optionsStatus}  valueChange={onStatusChange}></Select>
                <Select name="gender" options={optionsGender}  valueChange={onGenderChange}></Select>
                <Select name="species" options={optionsSpecies}  valueChange={onSpeciesChange}></Select>

            </div>
        </div>
        
        
    )
}

export default Search;