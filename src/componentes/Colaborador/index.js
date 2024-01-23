import { AiFillCloseCircle } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './Colaborador.css';

const Colaborador = ({colaborador, corCard, aoDeletar, aoFavoritar}) => {
    const favoritar = () => {
        aoFavoritar(colaborador)
    }
    
    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador)}/>
            <div className='cabecalho' style={ { backgroundColor: corCard} }>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito
                        ? <MdFavorite {...propsFavorito} color="#ff0000"/>
                        : <MdFavoriteBorder {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador;
