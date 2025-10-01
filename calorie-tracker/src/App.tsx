import { useReducer, useEffect, useMemo } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducer/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState)

/*
USE REDUCER ES UNA ALTERNTICA DE USE STATE
ES UNA FUNCION QUE UTILIZA DENTRO DE ELLA USE STATE
ES UN HOOK PARA MANEJAR EL STATE
ES UN HOOK DE REACT QUE TE PERMITE AGREGAR UN REDUCER A TU COMPOENTE
EL HOOK USE REDUCER EN REACT ES UNA ALTERNATIVA A USE STATE QUE SE UTILIZA PARA MANEJAR
ESTADOS MAS COMPLEJOS Y TRANSICIONES DE ESTADO QUE INVOLUCRAN LÓGICA MÁS COMPLICADA.
MIENTRAS QUE USE STATE ES PERFECTO PARA EL MANEJO DE ESTAOS SIMPLES, USEREDUCER ES MÁS ADECUADO
PARA SITUACIONES DONDE EL NUEVO ESTADO DEPENDE DEL ESTADO ANTERIOR O CUANDO HAY 
MULTIPES SUB-VALORES O LOGICA CONDICIONAL A CONSIDERAR.

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


  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])


  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          <button
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer
            rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            state={state}
            dispatch={dispatch}
          ></Form>
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
          activities = {state.activities}
          >
            
          </CalorieTracker>
        </div>

      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        ></ActivityList>
      </section>
    </>
  )
}

export default App
