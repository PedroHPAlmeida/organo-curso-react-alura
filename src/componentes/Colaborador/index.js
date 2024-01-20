import { AiFillCloseCircle } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({colaborador, corCard, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador)}/>
            <div className='cabecalho' style={ { backgroundColor: corCard} }>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;
