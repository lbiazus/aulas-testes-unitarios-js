import axios from "axios";

const BASE_URL = 'http://localhost/acervo'

/*export const buscarFilmes = ()  => {
    return fetch("http://localhost:9090/acervo/filme")
        .then(response => response.json());
}*/

/*export const inserirFilme = (filme)  => {
    return fetch("http://localhost:9090/acervo/filme",
        {
            method: "POST",
            body: filme
        }
    )
        .then(response => response.json());
}*/

//const token = 'eyJhbGciOiJIUzUxMiJ9.eyJwZXJtaXNzb2VzIjpbXSwidXN1YXJpbyI6IkxFTyIsImV4cCI6MTc1MDM3MzU1OX0.csPB7pB7ljXClcsqHgaGQPFwTrf_KopOliN5Lhkdch8XPZ9Mox6693UCzf6Faht8if0R7qghwpI9YstULSMvAw'

export const buscarFilmes = ()  => {
    return axios.get(`${BASE_URL}/filme`/*, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }*/
    ).then(response => response.data);
}

export const buscarFilmePorId = id  => {
    return axios.get(`${BASE_URL}/filme/${id}`)
        .then(response => response.data);
}

export const inserirFilme = (filme)  => {
    return axios.post(`${BASE_URL}/filme`, filme)
        .then(response => response.data);
}

export const atualizarFilme = (filme)  => {
    return axios.put(`${BASE_URL}/filme`, filme)
        .then(response => response.data);
}

export const excluirFilme = id => {
    return axios.delete(`${BASE_URL}/filme/${id}`)
        .then(response => response.data);
}