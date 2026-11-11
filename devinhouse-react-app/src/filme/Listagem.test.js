import {render, screen } from '@testing-library/react'
import Listagem from './Listagem'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('Listagem de Filmes', () => {
    it('Deve conter a mensagem de filmes não encontrados quando a lista for vazia', () => {
        const filmes = [];

        render(<Listagem filmes={filmes} />)
        const mensagem = screen.getByText("Não existem filmes a ser listados.");
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
})