import FormEdit from '../FormEdit';
import Jogador from '../Jogador';

import './Time.css'
const Time = (props) => {
    console.log("time"+props.dadosJogadorEd)
    return (
        props.jogadores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='divJogadores'>
                {props.jogadores.map(jogador =>
                    <Jogador
                        aoEditarJogador={(dadosJogador) => props.aoEditarJogador(dadosJogador)}
                        aoDeletarJogador={(nomeJogador) => props.aoApagarJogador(nomeJogador)}
                        key={jogador.nome} nome={jogador.nome} posicao={jogador.posicao} imagem={jogador.imagem} time={jogador.time} corPrimaria={props.corPrimaria} />)}

            </div>
            <div >{props.mostrarFormEdicao && <FormEdit key={'FORM_EDITAR'} 
            dadosJogadoraSerEditado={props.dadosJogadorEd}
            textoP={props.textoP}
            aoJogadorCadastrado={(jogador, variavelEd) => props.aoJogadorCadastrado(jogador, variavelEd)}
            jogadorEditado={(j)=>{props.jogadorEditado(j)}} times={props.times} />}</div>

        </section>
    )
}
export default Time;