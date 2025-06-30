import { SelectorColores } from "../components/SelectorColores"
import { SelectorMateriales } from "../components/SelectorMaterial"
import { SelectorGrosor } from "../components/SelectorGrosor"
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context";
import { useNavigate } from "react-router-dom";


export function CargaStock(){

    const {color, grosor, material, isEditing, setIsEditing} = useContext(CrochetMContext)
    const [precio, setPrecio] = useState(1) 
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isEditing) {
            setIsEditing(true);
        }
    }, [isEditing, setIsEditing]);
   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:3001/stock', {
            material: material,
            color: color,
            grosor: grosor,
            cantidad: cantidad,
            precio: precio
        })
        .then(() => {
        console.log("Stock cargado correctamente");
        })
        .catch((error) => {
        console.error("Error al cargar stock:", error);
        });
        navigate('/stock')  
    };
    const handleCancel = () => {
        navigate('/stock')
    }

    return(
        <div className="carga-stock-cnt">
            <h2>CARGAR NUEVO HILADO</h2>
            <form onSubmit={handleSubmit} className="form-carga-stock">
                <span className="campo">
                    <label>Material</label>
                    <SelectorMateriales
                        isEditing = {isEditing}
                    />
                </span>
                <span className="campo">
                    <label>Color</label>
                    <SelectorColores
                        isEditing = {isEditing}
                    />
                </span>
                <span className="campo">
                    <label>Grosor</label>
                    <SelectorGrosor
                        isEditing = {isEditing}
                    />
                </span>
                <span className="campo">
                    <label>Cantidad</label>
                    <input 
                        type="number" 
                        min={1} 
                        max={100000} 
                        required
                        onInvalid={(e) => {
                        if (!e.target.value) {
                        e.target.setCustomValidity("Este campo es obligatorio");
                        } else if (e.target.value < 1 || e.target.value > 100000) {
                        e.target.setCustomValidity("El valor debe estar entre 1 y 100000");
                        }
                        }}
                        onInput={(e) => e.target.setCustomValidity("")}
                        onChange={(e) => setCantidad(+e.target.value)}
                    />
                </span>            
                <span className="campo">
                    <label>Precio</label>
                    <input 
                        type="number"
                        min={1} 
                        max={100000} 
                        required
                        onInvalid={(e) => {
                        if (!e.target.value) {
                        e.target.setCustomValidity("Este campo es obligatorio");
                        } else if (e.target.value < 1 || e.target.value > 1000000) {
                        e.target.setCustomValidity("El valor debe estar entre 1 y 1000000");
                        }
                        }}
                        onInput={(e) => e.target.setCustomValidity("")}
                        onChange={(e) => setPrecio(+e.target.value)}
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