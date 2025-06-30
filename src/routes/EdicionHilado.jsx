    import { useParams } from "react-router-dom";
    import axios from "axios";
    import { useEffect, useState, useContext } from "react";
    import { CrochetMContext } from "../contexts/crochet-manager-context";
    import { SelectorMateriales } from "../components/SelectorMaterial";
    import { SelectorColores } from "../components/SelectorColores";
    import { SelectorGrosor } from "../components/SelectorGrosor";
    import { useNavigate } from "react-router-dom";

    export function EditarHilado(){
        const {id} = useParams();
        const [hilado, setHilado] = useState([])
        const { color, grosor, material, setColor, setGrosor, setMaterial } = useContext(CrochetMContext)
        const [precio, setPrecio] = useState(1) 
        const [cantidad, setCantidad] = useState(1)
        const navigate = useNavigate();
        const [isEditing, setIsEditing] = useState(false);

        useEffect(() => {
            axios.get(`http://localhost:3001/stock/${id}`)
            .then((data) => {
                console.log("Item: ", data.data) 
                setHilado(data.data)
                setColor(data.data.color);
                setGrosor(data.data.grosor);
                setMaterial(data.data.material);
                setCantidad(data.data.cantidad);
                setPrecio(data.data.precio);
            })
            .catch((error) => {
                console.log("Error!: ", error)
            })
        }, []);

        const handleSubmit = (e) => {
            e.preventDefault(); 
            if (!isEditing) {
            setIsEditing(true);
            return;
            }
            console.log({
                material: material,
                color: color,
                grosor: grosor,
                cantidad: cantidad,
                precio: precio
            })
            axios.put(`http://localhost:3001/stock/${id}`, {
                id: id,
                material: material,
                color: color,
                grosor: grosor,
                cantidad: cantidad,
                precio: precio
            })
            .then(() => {
                console.log("Stock cargado correctamente")
                setIsEditing(false)
            })
            .catch((error) => {
                console.error("Error al cargar stock:", error)
            }); 
        };
        const handleCancel = () => {
            setIsEditing(false)
        }

        return(
            <div className="carga-stock-cnt">
                <h2>
                    {isEditing ? "EDITAR HILADO" : "DETALLES"}
                </h2>
                <form onSubmit={handleSubmit} className="form-carga-stock"> 
                    <span className="campo">
                        <label>Material</label>
                        <SelectorMateriales 
                            isEditing = {isEditing}
                            material = {hilado.material}
                        />
                    </span>
                    <span className="campo">
                        <label>Color</label>
                        <SelectorColores
                            isEditing = {isEditing}
                            color = {hilado.color}
                        />
                    </span>
                    <span className="campo">
                        <label>Grosor</label>
                        <SelectorGrosor
                            isEditing = {isEditing}
                            grosor = {hilado.grosor}
                        />
                    </span>
                    <span className="campo">
                        <label>Cantidad</label>
                        <input 
                            value={cantidad}
                            type="number" 
                            min={1} 
                            max={100000} 
                            required
                            disabled={!isEditing}
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
                            value={precio}
                            type="number"
                            min={1} 
                            max={100000} 
                            required
                            disabled={!isEditing}
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
                    <button type="submit" className="save-btn">
                            {isEditing ? "Guardar" : "Editar"}
                    </button>
                </form>
                {isEditing && (
                <button className="cancel-btn" onClick={handleCancel}>
                    Cancelar
                </button>
                )}
            </div>
        )




        

    }