import plus from '../assets/plus-circle.svg'
import { useNavigate } from 'react-router-dom'
import { ProyectoCard } from '../components/ProyectoCard'
import { SearchProyecto } from '../components/ProyectoSearchingBar'
import { MenuDesplegable } from '../components/MenuDesplegable'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { CrochetMContext } from '../contexts/crochet-manager-context'

export function Proyecto(){

    const navigate = useNavigate()
    const [proyectoItems, setProyectoItems] = useState([]) 

    const { resetProject } = useContext(CrochetMContext);

    
    function handleProyectoItems(query = "") {
        const url = query 
        ? `http://localhost:3001/proyectos?q=${encodeURIComponent(query)}`
        : `http://localhost:3001/proyectos`
        axios.get(url)
          .then((data) => {
            console.log("proyectos", data.data) 
            setProyectoItems(data.data)
          })
          .catch((error) => {
            console.log("Error!: ", error)
        })
    }

    function handleNav(){
        resetProject()
        navigate('/carga-proyecto')
    }
    
    useEffect(() => {
        handleProyectoItems()
    }, []);

    return(
        <div className='stock-cnt'>
            <header>
                <MenuDesplegable/>
            </header>
            <section className='page-menu'>
                <h1>PROYECTOS</h1>
                <img 
                    src={plus} 
                    title='Agregar proyecto' 
                    onClick={handleNav}
                    className='menu-icon-btn'
                />
            </section>
            <SearchProyecto
                onSearch={handleProyectoItems} 
            />
            <section className='stock-items-cnt'>
                {proyectoItems.map((itemproyecto) => (
                        <ProyectoCard 
                            key={itemproyecto.id}
                            itemproyecto = {itemproyecto}
                        />
                    ))}
            </section>
        
        </div>
    )
}