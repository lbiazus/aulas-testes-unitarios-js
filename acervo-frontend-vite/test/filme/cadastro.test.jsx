import Cadastro from "../../src/filme/cadastro";

describe('Cadastro de Filmes', () => {
    it('Deve conter o título correto da página', () => {
        render(<Cadastro filme={{}} />);

        // const titulo = screen.getByRole('input', {name: 'diretor'});
        // expect(titulo).toBeInTheDocument();
    })
})