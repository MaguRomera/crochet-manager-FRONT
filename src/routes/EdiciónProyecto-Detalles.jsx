import React, { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { CrochetMContext } from "../contexts/crochet-manager-context"
import { SelectorGancho } from "../components/Selectores/SelectorGanchos"
import gotolink from "../assets/gotolink.svg"
import { MenuDesplegable } from "../components/MenuDesplegable"

export function EditarProyectoDetalles() {
    const { id } = useParams()
    const [proyecto, setProyecto] = useState(null)
    const [nombre, setNombre] = useState("")
    const [estado, setEstado] = useState("") 
    const [patron, setPatron] = useState("")
    const [temporada, setTemporada] = useState("")
    const [loading, setLoading] = useState(true)
    const { gancho, setGancho, isEditingProy, setIsEditingProy } = useContext(CrochetMContext)

    const navigate = useNavigate()

    useEffect(() => {
        setIsEditingProy(false)
        axios.get(`http://localhost:3001/proyectos/${id}`)
            .then((response) => {
                const data = response.data
                setProyecto(data)
                setNombre(data.nombre)
                setEstado(data.estado)
                setPatron(data.patron)
                setTemporada(data.temporada)
                setGancho(data.ganchorecomendado)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error al obtener el proyecto:", error)
                setLoading(false)
            })
    }, [id, setIsEditingProy, setGancho])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isEditingProy) {
            setIsEditingProy(true)
            return
        }
        
        axios.put(`http://localhost:3001/proyectos/${id}`, {
            id: id,
            nombre: nombre,
            estado: estado,
            patron: patron,
            temporada: temporada,
            ganchorecomendado: gancho
        })
        .then(() => {
            console.log("Stock cargado correctamente")
            setIsEditingProy(false)
        })
        .catch((error) => {
            console.error("Error al cargar stock:", error)
        }) 
        window.location.reload()
    }

    const handleCancel = () => {
        if (isEditingProy) {
            setIsEditingProy(false)
        } else {
            navigate('/proyecto')
        }
    }

    const handlePatron = () => {
        if (proyecto && proyecto.patron) {
            window.open(proyecto.patron, '_blank');
        }
    }
    
    if (loading) {
        return (
            <div className="loader">
                <p>Cargando detalles del proyecto...</p>
            </div>
        )
    }
    if (!proyecto) {
      return (
          <div className="loader">
              <p>Proyecto no encontrado.</p>
          </div>
      )
    }

    const handleNotas = () => {
        navigate(`/proyecto-notas/${proyecto.id}`)
    }
    const handleContador = () => {
        navigate(`/cuentavueltas/${proyecto.id}`)
    }

    return (
        <div className="pagina-detalles-proyecto">
            <header>
                <MenuDesplegable/>
            </header>
            <h2>{proyecto.nombre.toUpperCase()}</h2>
            <span className="nav-menu-edicion">
                <span className="seccion-actual">Detalles</span>
                <span onClick={handleNotas}>Notas</span>
                <span onClick={handleContador}>Contador</span>
            </span>
            <div className="edicion-proyecto-cnt">
                {!isEditingProy && proyecto.patron && (
                    <button onClick={handlePatron} className="patron-btn">
                        <p>PATRÓN</p>
                        <img src={gotolink} title="Abrir patón" />
                    </button>
                )}
                <form onSubmit={handleSubmit} className="form-carga-stock">
                    { isEditingProy && (
                        <div>
                            <span className="campo">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    value={nombre}
                                    required
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </span>
                        </div>
                    )}

                    <span className="campo">
                        <label>Estado</label>
                        <select
                            className="selector"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                            disabled={!isEditingProy}
                        >
                            <option className="option" value="">Seleccionar estado</option>
                            <option>En curso</option>
                            <option>Terminado</option>
                            <option>Abandonado</option>
                        </select>
                    </span>

                    {isEditingProy && (
                        <div>
                            <span className="campo">
                                <label>Link al patrón</label>
                                <input
                                    type="text"
                                    value={patron}
                                    onChange={(e) => setPatron(e.target.value)}
                                />
                            </span>
                        </div>
                    )}
                    
                    <span className="campo">
                        <label>Temporada</label>
                        <select
                            className="selector"
                            value={temporada}
                            onChange={(e) => setTemporada(e.target.value)}
                            required
                            disabled={!isEditingProy}
                        >
                            <option className="option" value="">Seleccionar temporada</option>
                            <option>Otoño-Invierno</option>
                            <option>Primavera-Verano</option>
                            <option>All-season</option>
                        </select>
                    </span>
                    
                    <span className="campo">
                        <label>Gancho utilizado</label>
                        <SelectorGancho isEditingProy={isEditingProy} />
                    </span>

                    <button type="submit" className="save-btn">
                        {isEditingProy ? "Guardar" : "Editar"}
                    </button>
                </form>
                <button onClick={handleCancel} className="cancel-btn">
                    {isEditingProy ? "Cancelar" : "Volver"}
                </button>
            </div>
        </div>
    )
}
