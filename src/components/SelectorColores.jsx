import { useContext } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context"; 


export function SelectorColores(){
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

   return(
        <select 
            className="selector"
            name="Colores"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
        >
        <option className="option" value="">Seleccionar color</option>
        {colores.map((c) => (
            <option className="option" key={c} value={c}>{c}</option>
        ))}
        </select>
   )

}