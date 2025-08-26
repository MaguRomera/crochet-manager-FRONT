import { useNavigate } from "react-router-dom"
import '../styles/App.css'

export function Home(){

    const navigate = useNavigate() 
    const handleNavStock = () => {
        navigate("/stock")
    }
    const handleNavProyecto = () => {
        navigate("/proyecto")
    }
 
    return(
        <div className="home-cnt">
            <h1>CROCHET MANAGER</h1>
            <section className="start-menu">
                <button 
                    className="select-button"
                    onClick={handleNavStock}>
                    STOCK
                </button>
                <button 
                    className="select-button"
                    onClick={handleNavProyecto}>
                    PROYECTO
                </button>
            </section>
        </div>
    )
}