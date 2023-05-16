import { useEffect, useState } from 'react';

const Questao03 = () => {
    // variáveis de estado para comparar as populações
  const [maiorPopulacao, setMaiorPopulacao] = useState('');
  const [menorPopulacao, setMenorPopulacao] = useState('');

  useEffect(() => {
    // pega os dados de capital e população do site de forma asincrona, que não para o carregamento das outras funções
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/region/europe?fields=capital,population'
        );
        const data = await response.json();

        let maiorPopulacaoIndex = 0;
        let menorPopulacaoIndex = 0;

        // laço que irá rodar o vetor de dados da população e irá atribuir o maior e menor valor às variáveis maiorPopulacaoIndex e menorPopulacaoIndex 
        for (let i = 0; i < data.length; i++) {
          if (data[i].population > data[maiorPopulacaoIndex].population) {
            maiorPopulacaoIndex = i;
          }
          if (data[i].population < data[menorPopulacaoIndex].population) {
            menorPopulacaoIndex = i;
          }
        }

        // irá usar os métodos das variáveis de estado para atribuir o valor encontrado no laço(for) anterior
        setMaiorPopulacao(data[maiorPopulacaoIndex].capital[0]);
        setMenorPopulacao(data[menorPopulacaoIndex].capital[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

//   irá imprimir na tela os valores das variáveis de estado
  return (
    <div>
      <h1>País com a maior população: {maiorPopulacao}</h1>
      <h1>País com a menor população: {menorPopulacao}</h1>
    </div>
  );
};

export default Questao03;