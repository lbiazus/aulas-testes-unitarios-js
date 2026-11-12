//import { render, screen } from '@testing-library/react'
import Listagem from '../../src/filme/listagem'
import { BrowserRouter } from 'react-router';

describe('Listagem de Filmes', () => {
    it('Deve conter a mensagem de filmes não encontrados quando a lista for vazia', () => {
        const filmes = [];

        render(<Listagem filmes={filmes} />)
        const mensagem = screen.getByText("Não existem filmes cadastrados.");
        expect(mensagem).toBeInTheDocument();
    });

    it('Deve exibir a lista de filmes quando houver filmes disponíveis', () => {
        const filmes = [{id: 1, titulo: "Filme 1"}, {id: 2, titulo: "Filme 2"}];

        render(
            <BrowserRouter>
                <Listagem filmes={filmes} />
            </BrowserRouter>
        );
        const tabela = screen.getByRole("table");
        expect(tabela).toBeInTheDocument();
        expect(screen.getByText("Filme 1")).toBeInTheDocument();
        expect(screen.getByText("Filme 2")).toBeInTheDocument();
    })

    it('Deve exibir a tabela de filmes', () => {
        const filmes = [{id: 1, titulo: "Filme 1"}, {id: 2, titulo: "Filme 2"}];

        render(
            <BrowserRouter>
                <Listagem filmes={filmes} />
            </BrowserRouter>
        );
        // const tabela = screen.getByRole("table", { name: "tabelaFilmes" });
        const tabela = screen.getByRole("table");
        expect(tabela).toBeInTheDocument();
    })
})