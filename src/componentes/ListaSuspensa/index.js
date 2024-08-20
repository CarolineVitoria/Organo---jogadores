import './ListaSuspensa.css'
const ListaSuspensa = (props) =>{
    const aoSelecionado = (evento) =>{
        props.aoAlterado(evento.target.value);
    }
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
            onChange={aoSelecionado} 
            required={props.obrigatorio}
            value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa