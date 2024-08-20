import { useState } from 'react';
import LongMenu from '../LongMenu';
import './Jogador.css'


const Jogador = ({nome, imagem, posicao, time, aoDeletarJogador, aoEditarJogador, corPrimaria}) => { //desestrutrução, peguei apenas essas propriedades do objeto props
    const[opcao, setOpcao] = useState('');
    const deletaJogador = (op)=>{
        setOpcao(op);
        aoDeletarJogador(nome);
        console.log("Indo")
    }
    const editaJogador= (e) =>{
        console.log('teste');
        aoEditarJogador({nome, posicao, imagem, time});
    }
    return (
        <div className='jogador'>
            
            <div className="cabecalho" style={{backgroundColor:corPrimaria}}

            >
            <LongMenu aoDeletar={(op)=>{
            deletaJogador(op);}}
            aoEditar={()=>editaJogador()}
            ></LongMenu>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{posicao}</h5>
            </div>
        </div>
    )
        
}


export default Jogador;