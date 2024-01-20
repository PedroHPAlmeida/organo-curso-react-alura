import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B96',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];
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
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}
        <Rodape/>
    </div>
  );
}

export default App;
