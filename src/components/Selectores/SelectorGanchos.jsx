import { useContext, useEffect } from "react";
import { CrochetMContext } from "../../contexts/crochet-manager-context"; 
export function SelectorGancho(props){
    const {gancho, setGancho} = useContext(CrochetMContext);
    
        const ganchos = [
            "Crochet N°0",
            "Crochet N°1",
            "Crochet N°2",
            "Crochet N°2.5",
            "Crochet N°3",
            "Crochet N°3.5",
            "Crochet N°4",
            "Crochet N°4.5",
            "Crochet N°5",
            "Crochet N°5.5",
            "Crochet N°6",
            "Crochet N°6.5",
            "Crochet N°7",
            "Crochet N°8",
            "Crochet N°9",
            "Crochet N°10",
            "Crochet N°15",
        ];
        
        useEffect(() => {
                if (!gancho && props.gancho) {
                    setGancho(props.gancho);
                }
            }, [gancho, props.gancho, setGancho]);

       return(
            <select 
                className="selector"
                name="Ganchos"
                id="gancho"
                value={gancho}
                onChange={(e) => setGancho(e.target.value)}
                required
                disabled={!props.isEditing}
            >
            <option className="option" value="">{ props.gancho || "Seleccionar gancho" }</option>
            {ganchos.map((g) => (
            <option className="option" key={g} value={g}>{g}</option>
            ))}
            </select>
       )
    
}