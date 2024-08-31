import { useState } from 'react';
import Formulario from '../formulario';
import './FormEdit.css'
const FormEdit = (props) => {
    const [obj, setObj] = useState();


    console.log(props.dadosJogadoraSerEditado+"formed");
    return (
        <div className='div-form-edit'>
            <Formulario 
            aoJogadorCadastrado={(jogador, variavelEd) => props.aoJogadorCadastrado(jogador, variavelEd)}
             recebeDados={(dados)=>{setObj(dados)}}
            times={props.times.map(time => time.nome)}
            dadosInput={props.dadosJogadoraSerEditado}
            value="Salvar"
            >
            
            </Formulario>
            {/* <div onClick={aoSalvarEd}>
            <Botao value="Salvar"></Botao>
            </div> */}
            
        </div>

    )
}
export default FormEdit;