import axios from "axios";

export const login = ()  => {
    return axios.post("http://localhost/acervo/usuario/login", {
        login: "LEO",
        senha: "123"
    }
    ).then(response => response.data);
}