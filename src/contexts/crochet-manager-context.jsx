import { useState, useEffect } from "react";
import { createContext } from "react";

export const CrochetMContext = createContext()

export function CrochetContextProvider(props){

    const [color, setColor] = useState("")
    const [grosor, setGrosor] = useState("")
    const [gancho, setGancho] = useState("")
    const [material, setMaterial] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingProy, setIsEditingProy] = useState(false);
    const resetProject = () => {
        setGancho(""); 
    };

    const CrochetMData = {
        color, setColor,
        grosor, setGrosor,
        gancho, setGancho,
        material, setMaterial,
        isEditing, setIsEditing,
        isEditingProy, setIsEditingProy,
        resetProject
    }
    return(
        <CrochetMContext.Provider value={CrochetMData}>{props.children}</CrochetMContext.Provider>
    )
}