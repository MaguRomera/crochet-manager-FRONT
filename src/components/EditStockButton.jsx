import editicon from "../assets/edit-pencil.svg"
import { useNavigate } from "react-router-dom"

export function EditStockItem(props){
    
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        navigate(`/editar-stock/${props.id}`)
    }

    return(
            <button 
                onClick={handleClick}
                title="Editar hilado"
                className="button">
                <img src={editicon} className="edit-btn-icon"/>
            </button>
            
        )
}