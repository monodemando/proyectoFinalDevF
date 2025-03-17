const Card = (props) => {
   
   const {user} = props;
   const {name, image, gender, species, status} = user;
   
   return <div className="card">
        <h2>{name}</h2>
        <img className="img"src={image} ></img>
        <ul>
            <li>{gender}</li>
            <li>{species}</li>
            <li>{status}</li>
        </ul>
    </div>
}

export default Card;