
import './CampoTexto.css'
const CampoTexto = (props) =>{

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value); //chamando a propriedade aoAlterado que guarda um método
    }
    return (
        <div className="campo-texto" >
            <label >{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto