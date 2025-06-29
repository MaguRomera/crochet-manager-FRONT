import { useContext } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context"; 
export function SelectorGrosor(){
    const {grosor, setGrosor} = useContext(CrochetMContext);
    
        const grosores = [
            "Fino",
            "Semigrueso",
            "Grueso",
            "Fingering"
        ];
    
       return(
            <select 
                className="selector"
                name="Grosores"
                id="grosor"
                value={grosor}
                onChange={(e) => setGrosor(e.target.value)}
                required
            >
            <option className="option" value="">Seleccionar grosor</option>
            {grosores.map((g) => (
            <option className="option" key={g} value={g}>{g}</option>
            ))}
            </select>
       )
    
}