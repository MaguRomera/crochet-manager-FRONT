import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context";
import { useNavigate } from "react-router-dom";
import { SelectorGancho } from "../components/Selectores/SelectorGanchos";

//ACORDATE QUE FALTA AGREGAR LO DEL SELECTOR MÚLTIPLE DE MATERIALES DEL STOCK!!!

export function CargaProyecto(){

    const {gancho, isEditing, setIsEditing} = useContext(CrochetMContext)

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("")
    const [estado, setEstado] = useState("") 
    const [patron, setPatron] = useState("")
    const [temporada, setTemporada] = useState("")

    useEffect(() => {
        if (!isEditing) {
            setIsEditing(true);
        }
    }, [isEditing, setIsEditing]);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/proyectos', {
            nombre: nombre,
            estado: estado,
            patron: patron,
            temporada: temporada,
            ganchorecomendado: gancho
        })
        .then(() => {
        console.log("Proyecto cargado correctamente");
        })
        .catch((error) => {
        console.error("Error al cargar el proyecto:", error);
        });
        navigate('/proyecto')  
    };
    const handleCancel = () => {
        navigate('/proyecto')
    }

    return(
        <div className="carga-stock-cnt">
            <h2>CARGAR NUEVO PROYECTO</h2>
            <form onSubmit={handleSubmit} className="form-carga-stock">
                <span className="campo">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        required
                        onInvalid={(e) => {
                        if (!e.target.value) {
                        e.target.setCustomValidity("Este campo es obligatorio");
                        }}}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </span>

                <span className="campo">
                    <label>Estado</label>
                    <select 
                        className="selector"
                        name="Estados"
                        id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        disabled={!isEditing}
                    >
                        <option className="option" value="">Seleccionar estado</option>
                        <option>En curso</option>
                        <option>Terminado</option>
                        <option>Abandonado</option>
                    </select>
                </span>

                <span className="campo">
                    <label>Link al patrón</label>
                    <input 
                        type="text" 
                        onChange={(e) => setPatron(e.target.value)}
                    />
                </span>

                <span className="campo">
                    <label>Temporada</label>
                    <select 
                        className="selector"
                        name="Temporadas"
                        id="temporada"
                        value={temporada}
                        onChange={(e) => setTemporada(e.target.value)}
                        required
                        disabled={!isEditing}
                    >
                        <option className="option" value="">Seleccionar temporada</option>
                        <option>Otoño-Invierno</option>
                        <option>Primavera-Verano</option>
                        <option>All-season</option>
                    </select>
                </span>

                <span className="campo">
                    <label>Gancho utilizado</label>
                    <SelectorGancho
                        isEditing = {isEditing}
                    />
                </span>

                <button type="submit" className="save-btn">Guardar</button>
            </form>
            <button className="cancel-btn"
                    onClick={handleCancel}
            >
                Cancelar
            </button>
        </div>
    )
}