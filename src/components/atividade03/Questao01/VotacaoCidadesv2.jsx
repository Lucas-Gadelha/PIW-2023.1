import { useEffect, useState } from "react"

const VotaCidades = () => {


const [cidades, setCidades] = useState (
    [
        {nome:"Fortaleza", votos:0},
        {nome:"Quixada", votos:0},
        {nome:"Sobral", votos:0},
        {nome:"Iguatu", votos:0},
    ]
)

const [flag,setFlag] = useState(false)

const votarNaCidade = (nome) => {

    // for(let i=0;i<cidades.length;i++){
    //     if(cidades[i].nome === nome){
    //         cidades[i].votos = cidades[i].votos + 1
    //     }
    // }
    const index = cidades.findIndex(
        (cidade)=> cidade.nome === nome
    )
    cidades[index].votos = cidades[index].votos + 1

    setFlag((prev)=>!prev)
}

const votarNaCidadeV2 = (nome) => {

    const newCidades = cidades.map(
        (cidade)=>{
            if(cidade.nome===nome) return {...cidade.nome,votos:cidade.votos+1}
            return {...cidade}
        }
    )

    setCidades(newCidades)
}
   

    return (

        <>

        <h1>votação cidades</h1>
        <h3>{cidades[0].nome}.{cidades[0].votos}</h3>
        <h3>{cidades[1].nome}.{cidades[1].votos}</h3>
        <h3>{cidades[2].nome}.{cidades[2].votos}</h3>
        <h3>{cidades[3].nome}.{cidades[3].votos}</h3>

        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={()=>votarNaCidade("Fortaleza")} >
                             fortaleza +1
                        </button>
                    </td>
                    <td>
                        <button onClick={()=>votarNaCidade("Quixada")} >
                             quixadá +1
                        </button>
                    </td>
                    <td>
                        <button onClick={()=>votarNaCidade("Sobral")} >
                             sobral +1
                        </button>
                    </td>
                    <td>
                        <button onClick={()=>votarNaCidade("Iguatu")} >
                             iguatu +1
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export default VotaCidades