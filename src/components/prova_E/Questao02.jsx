import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Questao02 = () => {

    // variáveis de estado que utilizam dados do pokeapi

    const [id, setId] = useState(25)
    const [nome, setNome] = useState("Bulbassaur")
    const [imagem, setImagem] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    const [loading, setLoading] = useState(false)
    const [virar, setVirar] = useState(false);

    // aproveitei o recurso do loading e o ID que irádefinir o pokemon

    useEffect(
        () => {

            setLoading(true)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.name)
                        setImagem(response.data.sprites.front_default)

                        setLoading(false)
                    }
                )
                .catch((error) => console.log(error))
        }
        ,
        [id] //caso vc queira emular um constutor, ou seja, executar apenas uma única vez, não coloque variáveis na lista de variáveis.
    )

    // função que alterna o valor do booleano em setVirar e muda da imagem 1 para 2 em setImagem

    const alternarVirar = () => {
        setVirar(!virar);
        setImagem(virar ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png');
        // é possível mudar o pokemon desejado mudando o número no final dos endereços, bem aqui -->^                                                                                     -->^
      };
      
    const renderizarConteudo = () => {
        
        if(loading) return (
            <>
                <tr>
                    <td colSpan={1}>
                        <h3>Loading....</h3>
                    </td>
                </tr>
            </>
        )

        return (
            <>
                <tr>
                    <td style={{ textAlign: "center" }} colSpan={2}>
                        <h2>Nome: {nome}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            src={imagem}
                            style={{ width: "300px" }}
                        />
                    </td>
                    
                </tr>
            </>
        )
    }

    return (
        <>
            <table border={"5px"}>
                <tbody>
                    {renderizarConteudo()}
                    <tr>
                        <td colSpan={1} style={{ textAlign: "center" }}>
                            {/* botão que inverte o valor do boleano virar através da função alternarVirar */}
                            <div>
                                <button onClick={alternarVirar}>Alternar</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Questao02