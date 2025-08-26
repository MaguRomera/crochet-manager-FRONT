import { useContext, useEffect } from "react";
import { CrochetMContext } from "../../contexts/crochet-manager-context"; 
export function SelectorMateriales(props){
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

    useEffect(() => {
        if (!material && props.material) {
            setMaterial(props.material);
        }
    }, [material, props.material, setMaterial]);

   return(
        <select 
            className="selector"
            name="Materiales"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            required
            disabled={!props.isEditing}
            
        >
        <option className="option" value="">{ props.material || "Seleccionar material" }</option>
        {materiales.map((m) => (
        <option className="option" key={m} value={m}>{m}</option>
        ))}
        </select>
   )

}