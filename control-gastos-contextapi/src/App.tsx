import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"


function App() {
  const { state } = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  },[state])
  /* 
  CONTEXT API
  Context API permite tener un estado global en tu app, esto quiere decir que
  solo se tiene una instancia del state que se puede acceder desde cualquier 
  componente sin pasarlo por diferentes componentes vía props.

  ALTERNATIVAS A CONTEXT API
  Context API no requiere dependencias pero su boilerplate para configurarlo puede
  ser algo complejo.


  */

  return (
    <>
      <header className="bg-blue-600 py-8 max-g-72">
        <h1 className='uppercase text-center font-black text-4xl text-white'>
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}


      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory></FilterByCategory>
          <ExpenseList></ExpenseList>
          <ExpenseModal></ExpenseModal>
        </main>

      )}


    </>
  )
}

export default App
