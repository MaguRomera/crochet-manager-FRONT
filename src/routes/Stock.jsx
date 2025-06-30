import plus from '../assets/plus-circle.svg'
import { SearchStock } from '../components/StockSearchingBar'
import { StockCard } from '../components/StockCard'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function Stock(){

    const navigate = useNavigate()
    const [stockItems, setStockItems] = useState([]) 
    
    function handleStockItems() { //para obtener el array de items de stock
        axios.get(`http://localhost:3001/stock`)
          .then((data) => {
            console.log("items del stock", data.data) 
            setStockItems(data.data)
          })
          .catch((error) => {
            console.log("Error!: ", error)
        })
    }

    function handleNav(){
        navigate('/carga-stock')
    }
    
    useEffect(() => {
        handleStockItems()
    }, []); 

    return(
        <div className='stock-cnt'>
            <section className='page-menu'>
                <h1>MI STOCK</h1>
                <img 
                    src={plus} 
                    title='Agregar stock' 
                    onClick={handleNav}
                    className='menu-icon-btn'
                />
            </section>
            <SearchStock/>
            <section className='stock-items-cnt'>
                {stockItems.map((itemstock) => (
                        <StockCard 
                            key={itemstock.id}
                            itemstock = {itemstock}
                        />
                    ))}
            </section>
        
        </div>
    )
}