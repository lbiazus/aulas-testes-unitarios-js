import { render, screen } from '@testing-library/react';
import Secao from "../../src/componentes/Secao";

describe('Seção', () => {
    it('Deve conter a div da seção e o título', () => {

        render(<Secao titulo="Seção de Filmes" />)
        // const div = screen.getByRole("div", { name: "secao" });
        // expect(div).toBeInTheDocument();
        const titulo = screen.getByText("Seção de Filmes");
        expect(titulo).toBeInTheDocument();
    });
});