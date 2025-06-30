import { useContext, useEffect } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context"; 


export function SelectorColores(props){
    const {color, setColor} = useContext(CrochetMContext);

    const colores = [
        "Amarillo",
        "Azul",
        "Beige",
        "Blanco",
        "Bordó",
        "Celeste",
        "Crema",
        "Gris",
        "Marrón",
        "Multicolor",
        "Naranja",
        "Negro",
        "Rojo",
        "Rosado",
        "Verde",
        "Veteado",
        "Violeta"
    ];

    useEffect(() => {
            if (!color && props.color) {
                setColor(props.color);
            }
        }, [color, props.color, setColor]);

   return(
        <select 
            className="selector"
            name="Colores"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
            disabled={!props.isEditing}
        >
        <option className="option" value="">{ props.color || "Seleccionar color" }</option>
        {colores.map((c) => (
            <option className="option" key={c} value={c}>{c}</option>
        ))}
        </select>
   )

}