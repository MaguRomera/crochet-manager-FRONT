import { useContext } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context"; // ← ajustá esta ruta si hace falta

export function SelectorMateriales(){
    const {material, setMaterial} = useContext(CrochetMContext);

    const materiales = [
        "Algodón",
        "Algodón sedificado",
        "Arrayán",
        "Cashmillion",
        "Chenille",
        "Estopa",
        "Flamé",
        "Hilo de Algodón",
        "Lana bebé",
        "Mohair",
        "Nevilan",
        "Peluche",
        "Profano",
        "Tuffy"
    ];

   return(
        <select 
            className="selector"
            name="Materiales"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
        >
        <option className="option" value="">Seleccionar material</option>
        {materiales.map((m) => (
        <option className="option" key={m} value={m}>{m}</option>
        ))}
        </select>
   )

}