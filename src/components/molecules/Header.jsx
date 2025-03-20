import { NavLink } from "react-router"



const Header = () => {

    return(
        <div id="header">
            <div id="title">
                <h2 id="titleText">Shats Search</h2>
            </div>
            <div id="redirections">
                <NavLink to="/" className="redirectionLinks" id="home"> Home</NavLink>
                <NavLink to="/" className="redirectionLinks" id="one">B</NavLink>
                <NavLink to="/" className="redirectionLinks" id="two">C</NavLink>
            </div>
        </div>
    )
        
    
}

export default Header;