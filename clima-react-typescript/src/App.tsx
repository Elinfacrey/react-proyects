import styles from './App.module.css'
import Alert from './components/Form/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'


function App() {
  const { weather,lodaing,notFound, fetchWeather, hasWeatherData } = useWeather()
  /* 
  Qué son las variables de entorno?
  fijar varibales en un entorno u oto
  Cuando se hace el build el entorno se convierte a producción
  Las variables de entorno en VITE siempre tienen que comenzar con VITE

  REPASANDO USE EFFECT
  USE EEFFECT EN UN HOOKQUE NOS PERMITE EJECUTAR CODIGO ARBITRARIO CUANDO
  EL COMPONENTE SE MONTA EN EL DOM Y
  CADA VEZ QUE CAMBIAN LAS DEPENDECIAS QUE NOSOTROS LE DIGAMOS
  SIEMPRE EL USE EFFECT SE VA A EJECUTAR UNA VEZ, POR QUE CUANDO SE MONTA 
  EN NUESTRO COMPONENTE SE EJECUTA UNA VEZ 
  SE VA A EJECUTAR CADA VEZ QUE SE RENDERIZE EL COMPONENTE O ALGUN CAMBIO EN LAS DEPENDENCIAS
  NUNCA PONER DENTRO DE UN CONDICIONAL UN HOOK
  */

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        ></Form>
        {lodaing && <Spinner></Spinner>}
        {hasWeatherData && <WeatherDetail
          weather={weather}
        >

        </WeatherDetail>}
        {notFound && <Alert>Ciudad no encontrada</Alert>}

      </div>

    </>
  )
}

export default App
