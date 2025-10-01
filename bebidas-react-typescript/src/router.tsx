import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layout from './layouts/Layout'

const FavoritesPage = lazy(() => import('./views/FavoritesPage'))


export default function AppRouter() {

    /* 
    REACT ROUTER
    Aplicaciones en React con Múltiples páginas 
    React Router es una de las librerías más comunes a la hora de crear aplicaciones de 
    múltiples páginas y navegación 
    React router es de los creadores de Remix Run 
    Características:
    Te permitirá crear secciones con diferentes urls tales como
    /tienda, /productos, /login, etc
    En versiones recientes agregaron la posibilidad de consultar APIS y procesar 
    formularios pero estas características son opcionales

    MULTIPES STORES EN ZUSTAND
    Conforme tus apps van creciendo o son más complejas, tu store también puede crecer
    Existen 2 opciones para manejar múltiples store: crear diferentes stores o 
    dividirlos utilizando Slice Pattern

    Slice Pattern es algo que también encuentras en Redux Toolkit y es una forma de dividir tus
    stores en pequeñas piezas y unirlas en un store principal
    */
    /*QUE ES UNA REST API
    UNA REST API ES UN CONJUNTO DE REGLAS QUE PERMITE QUE APLICACIONES SE COMUNIQUEN ENTRE 
    SI A TRAVES DE LA WEB
    REST = REPESENTATIONAL STATE TRANSFER
    DEBE RESPONDER A LOS REQUEST HTTP: GET, POST, PUT, PATCH, DELETE
    TIENE UNA FORMA ORDENADA Y ESTRUCTURADA DE PONER A DISPOSICION LOS RECURSOS DE UNA BASE DE DATOS
    
    ENDPOINTS
    UNA REST API CUENTA CON ENDPOINTS(URLS) PARA HACER OPERACIONES CRUD

    VENTAJAS DE UNA REST API
    SIMPLICIDAD DE CREACION

    *PERN
    POSTGRESQL EXPRESS REACT NODE.JS
    PERN STACK
    UN STACK ES UN CONJUNTO DE HERRAMIENTAS PARA CREAR UN APP

    *POSTGRESQL
    TAMBIEN LLAMADO POSTGRES, ES UN SISTEMA DE GESTION DE BASES DE DATOS RELACIONAL ORIENTADO A
    OBJETOS Y DE CODIGO ABIERTO 
    PARA INTERACTUAR CON NUESTA BASE DE DATOS PODEMOS HACERLO POR MEDIO DE UN ORM
    UN ORM TIENE TODOS LOS METODOS PARA CREAR, OBTENER, ACTUALIZAR Y ELIMINAR DATOS DE NUESTRA
    BASE DE DATOS

    *EXPRESS
    INFRAESTRUCTURA WEB RAPIDA, MINIMALISTA Y FLEXIBLE PARA NODE JS

    *NODE.JS
    ENTORNO DE EJECUCION EN JAVASCRIPT QUE SE EJECUTA EN EL SERVIDOR
    ENTE SUS VENTAJAS SE ENCUENTRA LA GRAN CANTIDAD DE LIBRERIAS DISPONIBLES PARA INTEGRARLAS EN
    PROYECTOS CON NPM
    PUEDE CONSULTAR BASE DE DATOS, AUTENTICAR USUARIOS, MANEJAR RUTAS Y MUCHOS MAS

    VENTAJAS DE PERN O MERN
    SEPARACION DE BACKEND Y FRONTEND

    */

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout></Layout>}>
                    <Route path='/' element={<IndexPage></IndexPage>} index></Route>
                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage></FavoritesPage>

                        </Suspense>
                    }></Route>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}
