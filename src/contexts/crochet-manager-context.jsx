import { useState, useEffect } from "react";
import { createContext } from "react";

export const CrochetMContext = createContext()

export function CrochetContextProvider(props){

    const [color, setColor] = useState("")
    const [grosor, setGrosor] = useState("")
    const [material, setMaterial] = useState("")
    const [isEditing, setIsEditing] = useState(false);

    const CrochetMData = {
        color, setColor,
        grosor, setGrosor,
        material, setMaterial,
        isEditing, setIsEditing
    }
    return(
        <CrochetMContext.Provider value={CrochetMData}>{props.children}</CrochetMContext.Provider>
    )
}