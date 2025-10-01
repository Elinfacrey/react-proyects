import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, {loader as productsLoader, action as updateAvailability} from './views/Products'
import NewProduct, {action as newProductAction} from './views/NewProduct'
import EditProduct, {loader as editProductLoader, action as editProductAction} from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

/**
 * Actions
 * React Rouer 
 * Utiliza Actions para procesar la entrada de datos es un un formulario
 * Para ello deberás importar un component llamado <Form>, crear una función
 * y en tu router decirle que función debe ejecutarse en el action.
 * Para la pagina principal Products, manda a llamar a la funcion productsLoader  
 */

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>, //children va a hacer que las paginas que esten en su arreglo, van a ser hijos de ese layout  
        children:[
            {
                index: true,
                element: <Products></Products>,
                loader: productsLoader,
                action: updateAvailability
               
            },
            {
                path:'productos/nuevo',
                element:<NewProduct></NewProduct>,
                action: newProductAction
            },
            {
                path:'productos/:id/editar',
                element: <EditProduct></EditProduct>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])