import { useNavigate } from "react-router-dom"
import '../styles/App.css'

export function Home(){

    const navigate = useNavigate()  
 
    return(
        <div className="home-cnt">
            <h1>CROCHET MANAGER</h1>
            <section className="start-menu">
                <button 
                    className="select-button"
                    onClick={()=>navigate('/stock')}>
                    STOCK
                </button>
            </section>
        </div>
    )
}