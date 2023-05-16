import { useEffect, useState } from "react"

const VotaCidades = () => {

    const [fortaleza, setFortaleza] = useState(0)
    const [quixada, setQuixada] = useState(0)
    const [sobral, setSobral] = useState(0)
    const [iguatu, setIguatu] = useState(0)

    const [mais, setMais] = useState("")
    const [menos, setMenos] = useState("")

    useEffect(
        ()=>{
            const cidades = [fortaleza,quixada,sobral,iguatu]
            const nomes = ["Fortaleza","Quixadá","Sobral","Iguatu"]
            let maior = Math.max(...cidades)
            let menor = Math.min(...cidades)
            console.log(maior + " " + menor)
            setMais("")
            setMenos("")
            for(let i=0;i<cidades.length;i++){
                if(cidades[i] === maior ) setMais((anterior)=>anterior + " " + nomes[i])
                if(cidades[i] === menor ) setMenos((anterior)=>anterior + " " + nomes[i])
            }
        }
        ,
        [fortaleza, quixada, sobral, iguatu]
    )

    return (

        <>

        <h1>votação cidades</h1>
        <h3>fortaleza: {fortaleza}</h3>
        <h3>quixada: {quixada}</h3>
        <h3>sobral: {sobral}</h3>
        <h3>iguatu: {iguatu}</h3>

        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={()=>setFortaleza((anterior)=>anterior + 1)} >
                             fortaleza +1
                        </button>
                    </td>
                    <td>
                        <button onClick={()=>setQuixada((anterior)=>anterior + 1)} >
                             quixadá +1</button>
                    </td>
                    <td>
                    <button onClick={()=>setSobral((anterior)=>anterior + 1)} >
                             sobral +1</button>
                    </td>
                    <td>
                    <button onClick={()=>setIguatu((anterior)=>anterior + 1)} >
                             iguatu +1</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3> Mais Votada(s): {mais}</h3>
        <h3> Menos Votada(s): {menos}</h3>
        </>
    );
}

export default VotaCidades