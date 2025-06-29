import { useContext, useEffect } from "react";
import { CrochetMContext } from "../contexts/crochet-manager-context"; 
export function SelectorGrosor(props){
    const {grosor, setGrosor} = useContext(CrochetMContext);
    
        const grosores = [
            "Fino",
            "Semigrueso",
            "Grueso",
            "Fingering"
        ];
        
        useEffect(() => {
                if (!grosor && props.grosor) {
                    setGrosor(props.grosor);
                }
            }, [grosor, props.grosor, setGrosor]);

       return(
            <select 
                className="selector"
                name="Grosores"
                id="grosor"
                value={grosor}
                onChange={(e) => setGrosor(e.target.value)}
                required
            >
            <option className="option" value="">{ props.grosor || "Seleccionar grosor" }</option>
            {grosores.map((g) => (
            <option className="option" key={g} value={g}>{g}</option>
            ))}
            </select>
       )
    
}