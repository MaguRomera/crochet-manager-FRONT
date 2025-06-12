import lupa from '../assets/search.svg'
export function SearchStock(){
    return(
        <span className='searching-bar'>
            <input type="text" placeholder="Buscá un hilado..."/>
            <img src={lupa} title='Buscar' />
        </span>
    )
}