import plus from '../assets/plus-circle.svg'
import { SearchStock } from '../components/StockSearchingBar'
import { useNavigate } from 'react-router-dom'
export function Stock(){

    const navigate = useNavigate()

    return(
        <div className='stock-cnt'>
            <section className='page-menu'>
                <h1>MI STOCK</h1>
                <img 
                    src={plus} 
                    title='Agregar stock' 
                    onClick={()=>navigate('/carga-stock')}
                    className='menu-icon-btn'
                />
            </section>
            <SearchStock/>
        
        </div>
    )
}