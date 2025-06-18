import deleteicon from "../assets/trash.svg"
//HACER FUNCIONAL LUEGO DE AGREGAR LA CARGA
export function DeleteStockItem(){
    return(
        <button 
            title="Borrar hilado"
            className="button">
            <img src={deleteicon} className="delete-btn-icon"/>
        </button>
        
    )
}