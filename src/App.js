import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'DevOps',
      cor: '#E06B96',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);
  const colaboradoresMock = [
    {
      id: uuidv4(),
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[0].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[1].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[2].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[2].nome,
      favorito: false,
    },
  ]
  const [colaboradores, setColaboradores] = useState(colaboradoresMock);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}]);
  }

  const deletarColaborador = (colaborador) =>  {
    setColaboradores([...colaboradores.filter(c => c.id !== colaborador.id)])
  }

  const aoFavoritarColaborador = (colaborador) => {
    setColaboradores(colaboradores.map(c => {
      if (colaborador.id === c.id) {
        c.favorito = !c.favorito
      }
      return c
    }))
  }

  const aoTimeCadastrado = (time) => {
    setTimes([...times, {...time, id: uuidv4()}])
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }));
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        aoTimeCadastrado={aoTimeCadastrado}
      />
      {times.map(time => 
        <Time
          key={time.nome}
          time={time}
          mudarCor={mudarCorDoTime}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={aoFavoritarColaborador}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;
