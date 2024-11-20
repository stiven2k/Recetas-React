import { useState, useEffect } from 'react'
let urlRecipes = 'http://localhost:3000/vegetarians'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2"

const UpdateVegetarian = () => {
    const [stateRecipes, setStateRecipes] = useState([])
    const [stateNombre, setStateNombre] = useState('')
    const [stateInstrucciones, setStateInstrucciones] = useState('')
    const [stateTiempo, setStateTiempo] = useState('')
    const [stateDificultad, setStateDificultad] = useState('')
    const [stateIngredientes, setStateIngredientes] = useState('')
    const [stateTipo, setStateTipo] = useState('')
    const [stateImg, setStateImg] = useState('')

    let { recipeId } = useParams()
    console.log(recipeId);
    function getRecipes() {
        fetch(urlRecipes)
            .then(response => response.json())
            .then(json => setStateRecipes(json))
    }
    useEffect(() => {
        getRecipes()
    }, [])


    function confirmUpdate() {
        Swal.fire({
            title: "Está seguro que desea eliminar esta receta: ",
            text: "No se puede revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                updateRecipe(recipeId)
                Swal.fire({
                    title: "Eliminado!",
                    text: "La receta ha sido eliminada.",
                    icon: "success"
                });
            }
        });
    }

    function updateRecipe(id) {
        console.log('Actualizando la receta: ' + id);
    }

    return (
        <form>
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Nombre" type="text" />
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Instrucciones" type="text" />
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Tiempo preparación" type="text" />
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Dificultad" type="text" />
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Ingredientes" type="text" />
            <input onChange={(e) => setStateDificultad(e.target.value)} placeholder="Tipo" type="text" />
            <input onClick={() => confirmUpdate()} type="button" value="Editar Receta" />
        </form>
    )
}

export default UpdateVegetarian