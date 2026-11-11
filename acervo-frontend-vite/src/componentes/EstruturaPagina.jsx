import { Link, NavLink } from "react-router";
import "./style/estruturapagina.css"
import { Button } from "@mui/material";
import { login } from "../services/usuario";

const EstruturaPagina = props => {
    const { titulo, children } = props;

    const efetuarLogin = () => {
        login();
    }

    return <div className="mainPage">
        <div className="header">
            <h1>Acervo Cultural</h1>
            <h2>{titulo}</h2>
                <Button variant="contained" onClick={efetuarLogin}>Login</Button>
                <Link 
                    to="/filme">Filmes
                </Link>
            
                <Link to={{
                    pathname: "/livro",
                    search: "?id=1&titulo=Avatar"
                }}>Livros</Link>
                
        </div>
        {children}
    </div>
    
    
}

export default EstruturaPagina;