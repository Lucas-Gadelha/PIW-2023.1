import { useState, useEffect } from 'react';

// calcula a media de alunos e salva na variável ed estado medias
const Questao01B = ({ alunos, setMedias }) => {
  useEffect(() => {
    const calcularMedias = () => {
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      setMedias(medias);
    };

    calcularMedias();
  }, [alunos, setMedias]);

  return null;
};

const Questao01A = () => {
  // objeto com os atributos nomes e notas
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
  ];

  const [medias, setMedias] = useState([]);
  const [loading, setLoading] = useState(true);

  // aquele carregamento pra ficar bacana, para caso não tenha nenhum objeto na lista
  useEffect(() => {
    if (medias.length > 0) {
      setLoading(false);
    }
  }, [medias]);

  // o map irá percorrer a lista de objetos alunos e só irá retornar o nome dos alunos que tiverem aluno.media[i] maior do que 6
  const renderAlunosAcimaDaMedia = () => {
    return alunos.map((aluno, index) => {
      if (medias[index] >= 6.0) {
        return <p key={index}>{aluno.nome}</p>;
      }
      return null;
    });
  };

  // renderiza os alunos fornecidos pela função renderAlunosAcimaDaMedia
  return (
    <div>
      <Questao01B alunos={alunos} setMedias={setMedias} />
      {loading ? <p>Carregando...</p> : renderAlunosAcimaDaMedia()}
    </div>
  );
};

export default Questao01A;

