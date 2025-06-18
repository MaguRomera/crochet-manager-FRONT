import editicon from "../assets/edit-pencil.svg"

export function EditStockItem(){
    return(
            <button 
                title="Editar hilado"
                className="button">
                <img src={editicon} className="edit-btn-icon"/>
            </button>
            
        )
}