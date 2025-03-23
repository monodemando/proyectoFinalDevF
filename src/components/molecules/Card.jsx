import { NavLink } from "react-router"
const Card = (props) => {
   
   const {user} = props;
   const {name, image, gender, species, status, id} = user;
   
   return <div className="card">
        <h2>{name}</h2>
        <img className="img"src={image} ></img>
        <ul>
            <li>{gender}</li>
            <li>{species}</li>
            <li>{status}</li>
        </ul>

        <NavLink to={`/character/${id}`}>
            <button className="info-button">Info</button>
        </NavLink>

    </div>
}

export default Card;