import plus from '../assets/plus-circle.svg'
import { useNavigate } from 'react-router-dom'
export function Stock(){

    const navigate = useNavigate()

    return(
        <div>
            <section className='page-menu'>
                <h1>MI STOCK</h1>
                <img 
                    src={plus} 
                    title='Agregar stock' 
                    onClick={()=>navigate('/carga-stock')}
                    className='icon-btn'
                />
            </section>
        
        </div>
    )
}