import deleteicon from "../assets/trash.svg"
import { Navigate } from "react-router-dom";
import axios from "axios"

export function DeleteStockItem(props){

    const navigate = Navigate

    const handleDelete = async (e) => {
        e.stopPropagation();
        const confirmar = window.confirm("¿Seguro que querés eliminar este hilado?");
        if (confirmar) {
            try {
                await axios.delete(`http://localhost:3001/stock/${props.id}`);
                alert("Hilado eliminado correctamente.");
                window.location.reload();
            } catch (error) {
                console.error("Error al eliminar:", error);
                alert("Ocurrió un error al eliminar.");
            }
        }
    }

    return(
        <button 
            title="Borrar hilado"
            className="button"
            onClick={handleDelete}>
            <img src={deleteicon} className="delete-btn-icon"/>
        </button>
        
    )
}