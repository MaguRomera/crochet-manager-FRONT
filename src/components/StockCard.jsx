import { DeleteStockItem } from "./DeleteStockButton"
import { EditStockItem } from "./EditStockButton"
export function StockCard(props){
    
    return(
        <div className="stock-card">
            <section className="text-stockcard">
                <h1>{props.itemstock.material.toUpperCase()}</h1>
                <span className="info-stockcard">
                    <p>{props.itemstock.color}</p>
                    <p>{props.itemstock.grosor}</p>
                </span>
            </section>
            <section className="buttons-stockcard">
                <EditStockItem
                    id = {props.itemstock.id}    
                />
                <DeleteStockItem
                    id = {props.itemstock.id}  
                />
                
            </section>
        </div>
    )
}