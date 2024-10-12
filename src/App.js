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
  
  const aoNovoJogadorAdicionado = (jogador, vEd) =>{
    if(vEd){
      aEdicaoDoJogador(jogador);
    }else{
      setJogadores([...jogadores, jogador]);
    }

  }
  const aEdicaoDoJogador= (novosDados) => {
    const newArray = jogadores.map(objeto => {
      if (objeto.nome === dadosje.nome && objeto.time === dadosje.time) {
        return novosDados;
      }
      return objeto;
    });
    
    setJogadores(newArray);
    setMostrarFormEdicao(false);

  }
    

  const apagarj = (jogador)=>{
    setJogadores(jogadores.filter(i=>i.nome !== jogador));
    
    console.log(jogadores)
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario
      value={"Criar card"}
      times = {times.map(time => time.nome)}
      aoJogadorCadastrado={(jogador, variavelEd) => aoNovoJogadorAdicionado(jogador, variavelEd)}
      textoP={"Preencha os dados para criar o card do jogador"}/>
      
      {times.map(time=>
      <Time key={time.id}
       
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      jogadores={jogadores.filter(jogador=> jogador.time === time.nome)}
      aoEditarJogador={(dados)=>
        {setMostrarFormEdicao(!mostrarFormEdicao);
         setDadosje(dados);
        }}
      aoJogadorCadastrado={(jogador, variavelEd) => aoNovoJogadorAdicionado(jogador, variavelEd)}
      dadosJogadorEd={dadosje}
      aoApagarJogador={jogador=>apagarj(jogador)}
      times = {times}
      mostrarFormEdicao={mostrarFormEdicao}
      textoP={"Edite os dados do seu jogador"}
      />)}
      


      <Rodape/>
    </div>
    
  );
}

export default App;
