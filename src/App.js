import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';
import Rodape from './Rodape';

function App() {

  const [dadosje, setDadosje] = (useState());

  const times = [

    {
      nome: 'Amazonas',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
      id:0
    },
    {
      nome: 'América RN',
      corPrimaria: 'aliceblue',
      corSecundaria: '#E06B69',
      id:1
    },
    {
      nome: 'Corinthians',
      corPrimaria: '#e8e8e8',
      corSecundaria: 'white',
      id:2
    },
    {
      nome: 'Flamengo',
      corPrimaria: 'black',
      corSecundaria: '#b55351',
      id:3
    },
  ];

  const [mostrarFormEdicao, setMostrarFormEdicao] = useState(false);


  const [jogadores, setJogadores]=
  useState([]);
  
  const aoNovoJogadorAdicionado = (jogador) =>{
    console.log(jogador);
    setJogadores([...jogadores, jogador]);
  }
  const aEdicaoDoJogador= () => {


  }
    

  const aa = (jogador)=>{

  
    setJogadores(jogadores.filter(i=>i.nome !== jogador));
    
    console.log(jogadores)
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario
      times = {times.map(time => time.nome)}
      aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
      
      {times.map(time=>
      <Time key={time.id}
       
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      jogadores={jogadores.filter(jogador=> jogador.time === time.nome)}
      aoEditarJogador={(dados)=>
        {setMostrarFormEdicao(!mostrarFormEdicao);
         setDadosje(dados);
         aEdicaoDoJogador(dados)
         console.log(dados)
        }}
      dadosJogadorEd={dadosje}
      jogadorNE={(jogadorED)=>aEdicaoDoJogador(jogadores, dadosje, jogadorED)}
      aoApagarJogador={jogador=>aa(jogador)}
      times = {times}
      mostrarFormEdicao={mostrarFormEdicao}
      
      />)}
      


      <Rodape/>
    </div>
    
  );
}

export default App;
