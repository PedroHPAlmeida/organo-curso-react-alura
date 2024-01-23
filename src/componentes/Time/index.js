import Colaborador from '../Colaborador';
import './Time.css';
import hexRgb from 'hex-rgb';

const Time = ({ time, mudarCor, colaboradores, aoDeletar, aoFavoritar }) => {
    return (
        (colaboradores.length > 0) && 
        <section className='time' style={{ backgroundColor: hexRgb(time.cor, {alpha: 0.4, format: 'css'}) }}>
            <input value={time.cor} onChange={(event) => mudarCor(event.target.value, time.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, i) => {
                    return (<Colaborador
                        key={i}
                        colaborador={colaborador}
                        corCard={time.cor}
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    />)
                })}
            </div>
        </section>
    );
}

export default Time;