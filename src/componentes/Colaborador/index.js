import './Colaborador.css';

const Colaborador = ({nome, imagem, cargo, corCard}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={ { backgroundColor: corCard} }>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;