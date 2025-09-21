import lupa from '../assets/search.svg'
import { useState } from 'react'
export function SearchProyecto({ onSearch }){

    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
        onSearch(value)
    }

    return(
        <span className='searching-bar'>
            <input 
                type="text" 
                placeholder="Buscá un proyecto..."
                value={search}
                onChange={handleChange}    
            />
            <img src={lupa} title='Buscar' />
        </span>
    )
}