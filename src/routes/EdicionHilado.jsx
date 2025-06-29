import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function EditarHilado(){
    const {id} = useParams();
    const [hilado, setHilado] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/stock/${id}`)
        .then((data) => {
            console.log("Item: ", data.data) 
            setHilado(data.data)
        })
        .catch((error) => {
            console.log("Error!: ", error)
        })
    }, []);
    




    

}