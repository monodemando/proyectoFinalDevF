import { UNSAFE_shouldHydrateRouteLoader } from "react-router";

const Button = (props) => {
    const {children, id, onClick, disabled} = props;
    return(
        <button id={id} onClick={onClick} disabled={disabled}> {children} </button>
    )
}

export default Button;