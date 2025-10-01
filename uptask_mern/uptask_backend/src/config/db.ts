import mongoose from 'mongoose'
import colors from 'colors'
import {exit} from 'node:process'

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL)
        const URL = `${connection.connection.host}:${connection.connection.port}`
        console.log(colors.cyan.bold(`MongoDB Conectado en: ${URL} `))
        console.log(connection)
    } catch (error) {
        //console.log(error.message)
        console.log('Error al conectar MongoDB')
        exit(1)
    }
}

/* 
QUE ES REACT QUERY?
React Query o también TanStack Query es una librería para obteer datos del servidor 

Sus ventajas princiales son que obtiene los datos de forma optimizada y rápida; además cachea las 
consultas, sincroniza/actualiza los datos del servidor de forma muy simple.

Se puede utilizar con Fetch API o Axios
Términos en React Query
Introduce una gran cantidad de conceptos nuevos; pero hay 2 que son los más importantes

QUERIES: Se utilizan para obtener datos de un servidor o de una API(GET)
MUTATION: Se utilizan para crear/ actualizar/ eliminar datos en el servidor(POST, PUT, PATCH, DELETE)

*/

