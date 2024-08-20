import { useState } from 'react';
import Botao from '../Botao';
import Formulario from '../formulario';
import './FormEdit.css'
const FormEdit = (props) => {
    const editavel = true;
    const [obj, setObj] = useState();
    const aoSalvarEd = () => {
        props.jogadorNE(obj);
    }


    console.log(props.dadosJogadorEditar+"formed");
    return (
        <div className='div-form-edit'>
            <Formulario 
             recebeDados={(dados)=>{setObj(dados)}}
            times={props.times.map(time => time.nome)}
            dadosInput={props.dadosJogadorEditar}
            >
            
            </Formulario>
            <div onClick={aoSalvarEd}>
            <Botao value="Salvar"></Botao>
            </div>
            
        </div>

    )
}
export default FormEdit;