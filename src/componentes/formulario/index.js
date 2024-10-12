import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
const Formulario = (props) => {
    let editavel;
    const [nome, setNome] = useState(()=>{if(props.dadosInput){return props.dadosInput.nome }else{return ''}});
    const [posicao, setPosicao] = useState(()=>{if(props.dadosInput){return props.dadosInput.posicao }else{return ''}});
    const [imagem, setImagem] = useState(()=>{if(props.dadosInput){return props.dadosInput.imagem }else{return ''}});
    const [time, setTime] = useState(()=>{if(props.dadosInput){return props.dadosInput.time }else{return ''}});

    const aoSalvar = (evento) => {
        evento.preventDefault();
        if(props.value === "Salvar"){
            editavel=true;
        }else{
            editavel=false;
        }
        props.aoJogadorCadastrado({
            nome,
            posicao,
            imagem,
            time
        }, editavel)/*criando objeto de forma enxuta*/
        setNome('');
        setPosicao('');
        setImagem('');
        setTime('');
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>{props.textoP}</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valorr => setNome(valorr)} />
                <CampoTexto 
                obrigatorio={true} 
                label="Posicão" 
                placeholder="Digite a posição do jogador"
                valor={posicao}
                aoAlterado={valorr => setPosicao(valorr)} />
                <CampoTexto 
                label="Imagem" 
                placeholder="Informe seu endereço de imagem"
                valor={imagem}
                aoAlterado={valorr => setImagem(valorr)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao value={props.value}/>
            </form>
        </section>
    )
}
export default Formulario;
