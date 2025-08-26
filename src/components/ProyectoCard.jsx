import { DeleteProyectoItem } from "./DeleteProyectoButton";
import { useNavigate } from "react-router-dom"
import { CrochetMContext } from "../contexts/crochet-manager-context"
import { useContext } from "react"

export function ProyectoCard(props){

    const {setIsEditing} = useContext(CrochetMContext);
    const navigate = useNavigate()

    const handleNav = () =>{
        setIsEditing(false)
        navigate(`/editar-proyecto/${props.itemproyecto.id}`)
    }
    
    return(
        <div className="stock-card" onClick={handleNav}>
            <section className="text-stockcard">
                <h1>{props.itemproyecto.nombre.toUpperCase()}</h1>
                <span className="info-stockcard">
                    <p>{props.itemproyecto.estado}</p>
                    <p>{props.itemproyecto.temporada}</p>
                </span>
            </section>
            <section className="buttons-stockcard">
                <DeleteProyectoItem
                    id = {props.itemproyecto.id}  
                />
                
            </section>
        </div>
    )
}