const Temperatura = () => {

    const celParaFah = (cel) => (9*cel+160)/5
    const fahParaCel = (fah) => (5*fah-160)/9
    const kelvin = (kel) => {
        const celsius = kel - 273;
        const fahrenheit = (kel-273)*9/5 + 32;
        return{celsius, fahrenheit}
    }

    const c = 30;
    const f = 67;
    const k = 0;
    return (
        <>
        <h1>a temperatura celsius {c} em fahrenheit é {celParaFah(c)}</h1>
        <h1>a temperatura fahrenheit{f} em celsius é{fahParaCel(f)}</h1>
        <h1>a temperatura kelvin {k} em celsius é {kelvin(0).celsius}</h1>
        <h1>a temperatura kelvin {k} em fahrenheit é {kelvin(0).fahrenheit}</h1>
        </>

    )
}

export default Temperatura