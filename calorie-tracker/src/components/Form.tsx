import { useState, ChangeEvent, FormEvent, Dispatch, useEffect, act } from "react"
import {v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import { ActivityActions, ActivityState } from "../reducer/activity-reducer"
import type { Activity } from "../types"


//USE REDUCER ES UNA ALTERNTICA DE USE STATE
//ES UNA FUNCION QUE UTILIZA DENTRO DE ELLA USE STATE
//ES UN HOOK PARA MANEJAR EL STATE
//ES UN HOOK DE REACT QUE TE PERMITE AGREGAR UN REDUCER A TU COMPOENTE
//EL HOOK USE REDUCER EN REACT ES UNA ALTERNATIVA A USE STATE QUE SE UTILIZA PARA MANEJAR
//ESTADOS MAS COMPLEJOS Y TRANSICIONES DE ESTADO QUE INVOLUCRAN LÓGICA MÁS COMPLICADA.
//MIENTRAS QUE USE STATE ES PERFECTO PARA EL MANEJO DE ESTAOS SIMPLES, USEREDUCER ES MÁS ADECUADO
//PARA SITUACIONES DONDE EL NUEVO ESTADO DEPENDE DEL ESTADO ANTERIOR O CUANDO HAY 
//MULTIPES SUB-VALORES O LOGICA CONDICIONAL A CONSIDERAR.

/*
COMPOSICION
El hook use reducer toma dos argumentos
Reducer: Una funcion que toma el estado actual y una acción, y devuelve un nuevo estado
Estado inicial: El estado del reducer

ALGUNOS TERMINOS

State        --> es el valor cuya lógica se maneja dentro del Reducer.
initialState --> es el estado inicial con el que es creado el reducer, este initialState es 
similar a los valores de inicio de useState.
Actions      --> las acciones son las funciones que manejan toda la lógica para modificar tu state.
Payload      --> es la información que modifica tu state.
Dispatch     --> es la funcion que manda a llamar la acción con el payload.
*/

type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

const initialState : Activity = {
    id : uuidv4(),
    category: 1,
    name: '',
    calories: 0
}


export default function Form({ dispatch, state }: FormProps) {
    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId) {
            const selectedActivity = state.activities.filter(statedActivity => statedActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId])


    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity, [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })

    }


    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() // para evitar el submit por default

        dispatch({ type: 'save-activity', payload: { newActivity: activity } })
        setActivity({...initialState,id:uuidv4()})
    }


    return (
        <>
            <form
                className="space-y-5 bg-white shadow p-10 rounded-lg"
                action=""
                onSubmit={handleSubmit}
            >

                <div className="grid gird-cols-1 gap-3">
                    <label htmlFor="category" className="font-bold">Categoría:</label>
                    <select className="border-border-slate-300 p-2 rounded-lg w-full bg-white" name="" id="category"
                        value={activity.category}
                        onChange={handleChange}
                    >
                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid gird-cols-1 gap-3">
                    <label htmlFor="name" className="font-bold">Actividad:</label>
                    <input type="text" id="name" className="border border-stale-300 p-2 rounded-lg"
                        placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicileta"
                        value={activity.name}
                        onChange={handleChange}
                    />

                </div>
                <div className="grid gird-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">Calorias:</label>
                    <input type="number" id="calories" className="border border-stale-300 p-2 rounded-lg"
                        placeholder="Calorias. ej, 300 o 500"
                        value={activity.calories}
                        onChange={handleChange}
                    />

                </div>
                <input type="submit"
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                    value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                    disabled={!isValidActivity()}
                />
            </form>
        </>
    )
}
