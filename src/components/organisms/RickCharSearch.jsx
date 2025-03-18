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
            value: "e"
        },
        {
            text: "Alive",
            value: "a"
        },
        {
            text: "Dead",
            value: "d"
            
        },
        {
            text: "Unknown",
            value: "u"
        }
    ]

    const [loading, setLoading] = useState(false); 
    const [users, setUser] = useState([]) 
    const [fullData, setFullData] = useState([])
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    

    useEffect(() => {

            const fetchSearchResults = async () => {
                try {
                    setLoading(true);
                    const responseApi = await fetch(
                        `https://rickandmortyapi.com/api/character?name=${searchTerm}&status=${filterStatus}`
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
    }, [searchTerm,  filterStatus]);


    useEffect(() => {
        const fetchUsers = async () => {
            
            try {
                setLoading(true);
                const responseApi = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchTerm}&status=${filterStatus}`);
                
                
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
        <Search options={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus}/>
        
        <p>Cargando....</p>
        </div>)
    } 
    if(error !== null){
        return (<div id="web">
        <Header></Header>
        <Search options={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus} />
        
        <p>Ocurrio un error: {error}</p>
        </div>)
    } 

    
        return(
            <div id="web">
        <Header></Header>
        <Search options={optionsStatus} setSearchTerm={setSearchTerm} searchTerm={searchTerm} onStatusChange={setFilterStatus}/>


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