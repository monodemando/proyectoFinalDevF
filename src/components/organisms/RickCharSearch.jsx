import Button from "../atoms/button";
import Card from "../molecules/Card";
import Header from "../molecules/Header"
import Search from "../molecules/Search"
import { useEffect } from "react";
import { useState } from "react";


const RickCharSearch = () => {
    
    const optionsStatus = [
        {
            text: "Filter by status",
            value: "fs",
            id: 1
        },
        {
            text: "Alive",
            value: "a",
            id: 2
        },
        {
            text: "Dead",
            value: "d",
            id: 3
            
        },
        {
            text: "Unknown",
            value: "u",
            id: 4
        }
    ]
    const optionsGender = [
        {
            text: "Filter Gender",
            value: "fg",
            id: 5
        },
        {
            text: "Female",
            value: "f",
            id: 6
        },{
            text: "Male",
            value: "m",
            id: 7
        },{
            text: "Genderless",
            value: "gl",
            id: 8
        },{
            text: "Unknown",
            value: "u",
            id: 9
        }
    ]

    const optionsSpecies = [
        {
            text: "Filter by species",
            value: "fbs",
            id: 10
        },
        {
            text: "Human",
            value: "h",
            id: 11
        },
        {
            text: "Alien",
            value: "al",
            id: 12
        },
        {
            text: "Humanoid",
            value: "hu",
            id: 13
        },
        {
            text: "Robot",
            value: "r",
            id: 14
        },
        {
            text: "Animal",
            value: "an",
            id: 15
        },
        {
            text: "Cronenberg",
            value: "c",
            id: 16
        },
        {
            text: "Disease",
            value: "d",
            id: 17
        },
        {
            text: "Mythological Creature",
            value: "m",
            id: 18
        },
        {
            text: "Poopybutthole",
            value: "pb",
            id: 21
        },
        {
            text: "Unknown",
            value: "u",
            id: 22
        }
    ];
    

    const [loading, setLoading] = useState(false); 
    const [users, setUser] = useState([]) 
    const [fullData, setFullData] = useState([])
    const [error, setError] = useState([null])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterGender, setFilterGender] = useState("");
    const [filterSpecies, setFilterSpecies] = useState("");


    useEffect(() => {

            const fetchSearchResults = async () => {
                try {
                    setLoading(true);
                    const responseApi = await fetch(
                        `https://rickandmortyapi.com/api/character?name=${searchTerm}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`
                    );

                    if (!responseApi.ok) {
                        throw new Error("No se encontraron personajes");
                    }

                    const data = await responseApi.json();
                    setUser(data.results);
                    setTotalPages(data.info.pages);
                    setCurrentPage(1); 
                    setError(null)
                } catch (error) {
                    setError(`Error: ${error.message}`);
                    setUser([]); 
                    setTotalPages(1);
                } finally {
                    setLoading(false);
                }
            };

            fetchSearchResults();
    }, [searchTerm,  filterStatus, filterGender, filterSpecies]);


    useEffect(() => {
        const fetchUsers = async () => {
            
            try {
                setLoading(true);
                const responseApi = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchTerm}&status=${filterStatus}&gender=${filterGender}&species=${filterSpecies}`);
                
                
                if(responseApi.status !== 200){
                    throw new Error('Error al obtener los datos')
                    
                }
                const data = await responseApi.json();  
                setFullData(data)              
                setUser(data.results);   
                setTotalPages(data.info.pages)
            } catch (error) {
                setError(`message: ${error.message}`)
                setUser([]);
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [currentPage])




    
    const NextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
           
        }
    };

    const PrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            
        }
    };

    
    

    if(loading === true){
        return (<div id="web">
        <Header></Header>
        <Search optionsStatus={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus}  optionsGender={optionsGender} onGenderChange={setFilterGender} optionsSpecies={optionsSpecies} onSpeciesChange={setFilterSpecies}/>

        
        <p>Cargando....</p>
        </div>)
    } 
    if(error !== null){
        return (<div id="web">
        <Header></Header>
        <Search optionsStatus={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus}  optionsGender={optionsGender} onGenderChange={setFilterGender} optionsSpecies={optionsSpecies} onSpeciesChange={setFilterSpecies}/>

        
        <p>Ocurrio un error: {error}</p>
        </div>)
    } 

    
        return(
            <div id="web">
        <Header></Header>
        <Search optionsStatus={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus}  optionsGender={optionsGender} onGenderChange={setFilterGender} optionsSpecies={optionsSpecies} onSpeciesChange={setFilterSpecies}/>



        {
            users.map((user) => {
                return <Card user={user} key={user.id}></Card>
            })
            
           
       }
            <div>
                <Button id="prevButton" onClick={
                    PrevPage
                } disabled={currentPage === 1}>Prev</Button>
                <span> Página {currentPage} de {totalPages} </span>
                <Button id="nextButton" onClick={
                    NextPage} disabled={currentPage === totalPages}>Next</Button>
            </div>
    </div>
        )
    
    }


export default RickCharSearch;