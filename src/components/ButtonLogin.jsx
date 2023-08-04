import Login from "./Login.jsx"
import { Link } from "react-router-dom"

const ButtonLogin = () => {
    return(
        <Link to="/login">
        <button type="button" className="btn btn-primary">Login</button>
        </Link>
    )
}

export default ButtonLogin;