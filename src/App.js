import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'DevOps',
      cor: '#E06B96',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);
  const colaboradoresMock = [
    {
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[0].nome
    },
    {
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[0].nome
    },
    {
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[0].nome
    },
    {
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[1].nome
    },
    {
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[1].nome
    },
    {
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[1].nome
    },
    {
      nome: 'Pedro Henrique',
      cargo: 'Desenvolvedor Fullstack',
      imagem: 'https://github.com/PedroHPAlmeida.png',
      time: times[2].nome
    },
    {
      nome: 'Thyago Lobato',
      cargo: 'Desenvolvedor Back-end',
      imagem: 'https://github.com/T-Lobato.png',
      time: times[2].nome
    },
    {
      nome: 'Lucas Nunes',
      cargo: 'Cientista de Dados',
      imagem: 'https://github.com/lucasnunes146.png',
      time: times[2].nome
    },
  ]
  const [colaboradores, setColaboradores] = useState(colaboradoresMock);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const deletarColaborador = (colaborador) =>  {
    console.log([...colaboradores.filter(c => c !== colaborador)])
    setColaboradores([...colaboradores.filter(c => c !== colaborador)])
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if(time.nome === nome) {
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
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)
      }/>
      
      {times.map(time => 
        <Time
          key={time.nome}
          time={time}
          mudarCor={mudarCorDoTime}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;
