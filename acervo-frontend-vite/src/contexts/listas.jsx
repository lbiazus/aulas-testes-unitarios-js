import { createContext, useEffect, useState } from "react";
import { buscarGeneros } from "../services/generos";
import { login } from "../services/usuario";

const CONTEXTO_INICIAL = {
    generos: ["Terror", "Ficção Científica"]
}

const ListasContext = createContext(CONTEXTO_INICIAL);

export const ListasProvider = props => {
    const { children } = props;
    const [ generos, setGeneros ] = useState();

    const carregarGeneros =  () => {
        const generos = buscarGeneros();
        setGeneros(generos);
    }

    const efetuarLogin = () => {
        login();
    }
    
    useEffect(() => {
        //Simulação de um login retornando o Token para armazenamento na Storage.
        //sessionStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzb2VzIjpbXSwidXN1YXJpbyI6IkxFTyIsImV4cCI6MTc2MDY1ODIyNX0.PvB13VYYQqAbfB9OYWafVthVOPmuXMliekoKlTCuebiJeF-aiNA4az1_wdYy9kLbTRf7OBS_tC6ze7Db0oXsag')
        //efetuarLogin();
        
        carregarGeneros();
    }, []);
    
    return <ListasContext.Provider value={{generos: generos}}>
        {children}
    </ListasContext.Provider>
}

export default ListasContext;