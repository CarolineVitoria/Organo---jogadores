import './Botao.css';

const Botao = (props)=> {
    return (
        <button onClick={props.eEditavel} className='botao'>{props.value}</button>
    )
}
export default Botao