import { useNavigate } from "react-router-dom"
import '../styles/App.css'

export function Home(){

    const navigate = useNavigate() 
    function handleNav(){
        navigate('/stock')
    } 
 
    return(
        <div className="home-cnt">
            <h1>CROCHET MANAGER</h1>
            <section className="start-menu">
                <button 
                    className="select-button"
                    onClick={handleNav}>
                    STOCK
                </button>
            </section>
        </div>
    )
}