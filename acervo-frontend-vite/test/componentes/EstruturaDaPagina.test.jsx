//import { render, screen } from '@testing-library/react';
import EstruturaDaPagina from "../../src/componentes/EstruturaPagina";
import { BrowserRouter } from 'react-router';

describe('Teste da Estrutura de Página', () => {
    it('Deve conter o título correto da página', () => {
        render(<BrowserRouter>
                    <EstruturaDaPagina titulo="Título da Página" />
                </BrowserRouter>
            );

        const titulo = screen.getByText('Título da Página');
        expect(titulo).toBeInTheDocument();
    })

    it('Deve conter o nome da aplicação', () => {
        render(<BrowserRouter><EstruturaDaPagina /></BrowserRouter>);

        const titulo = screen.getByText('Acervo Cultural');
        expect(titulo).toBeInTheDocument();
        // expect(screen.getByRole('h2', {
        //     name: 'Dev In House React App'
        // })).toBeInTheDocument();
    })
})