import { DeleteStockItem } from "./DeleteStockButton"
import { useNavigate } from "react-router-dom"
import { CrochetMContext } from "../contexts/crochet-manager-context"
import { useContext } from "react"

export function StockCard(props){

    const {setIsEditing} = useContext(CrochetMContext);
    const navigate = useNavigate()

    const handleNav = () =>{
        setIsEditing(false)
        navigate(`/editar-stock/${props.itemstock.id}`) 
    }
    
    return(
        <div className="stock-card" onClick={handleNav}>
            <section className="text-stockcard">
                <h1>{props.itemstock.material.toUpperCase()}</h1>
                <span className="info-stockcard">
                    <p>{props.itemstock.color}</p>
                    <p>{props.itemstock.grosor}</p>
                </span>
            </section>
            <section className="buttons-stockcard">
                <DeleteStockItem
                    id = {props.itemstock.id}  
                />
                
            </section>
        </div>
    )
}