import { useEffect, useMemo } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"
import { useCryptoStore } from "./store"

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)
  const result = useCryptoStore((state) => state.result)
  const isEmpty = useMemo(() => Object.keys(result).length === 0, [result])


  useEffect(() => {
    fetchCryptos()
  }, [])


  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm></CriptoSearchForm>
          {!isEmpty && <CryptoPriceDisplay></CryptoPriceDisplay>}
        </div>
      </div>

    </>
  )
}

export default App
