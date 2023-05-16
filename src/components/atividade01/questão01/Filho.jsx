const Filho = ({altura,peso}) => {
    
    const calcularImc = (altura,peso) => peso/(altura*altura)
    const renderizar = (imc) => {
        if (imc<18) return <h1>abaixo do peso</h1>
        else if (imc>25) return <h1>acima do peso</h1>
        return <h1>peso idela</h1>
    }

    const imc = calcularImc(altura,peso).toFixed(2)

    return (
        <div>
            <h1>Meu imc é {imc}</h1>
            {renderizar(imc)}
        </div>
    )
}

export default Filho