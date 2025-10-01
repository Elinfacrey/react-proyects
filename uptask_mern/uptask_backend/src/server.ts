import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { corsConfig } from './config/cors'
import {connectDB} from './config/db'
import projectRoutes from './routes/projectRoutes'

/* 
CORS
CORS, por sus siglas en inglés Croos-Origin Resource Sharing(Compartir recursos entre diferentes orígenes), 
es un mecanismo de seguridad utilizado en los  navegadores web para controlar las solicitudes de recuersos 
entre dominios diferentes. En esencia, CORS es un política se seguridad implementada en el lado del servidor que permite
o deniega las solicitudes de recursos web de un origen cruzado.

ORIGEN CRUZADO O CROSS ORIGIN 
Cuando un recurso(como una fuente, una imagen o una hoja de estilo) se solicita desde un dominio o puerto diferente al 
del origen del recurso actual, se considera una solicitud de origin cruzado. Antes de que se implementara CORS, los navegadores web
modernos restringían automáticamente las soilicitudes de origen cruzado para prevenir ataques se seguridad como el secuestro de sesiones y la 
inyección de scripts maliciosos.

VENTAJAS:
SEGURIDAD: CORS permite a los servidores tener un control más granular sobre qué dominios pueden acceder a los recursos. Esto reducec la posibilidad 
de ataques malicioso de origen cruzado

ACCESO CONTROLADO A RECURSOS: CORS permite a los sitios web controlar qué recursos están disponibles para ser solicitaos por dominios externos y qué recursos están restringidos. Esto
brinda mayor control sobre los datos y recursos del sitio web.

INTEROPERATIBILIDAD: CORS facilita el intercambio de datos y recursos entre diferentes dominios. Esto es particularmente útil en situaciones en las que una página web necesita cargar recursos
de múltipes dominios para funcionar correctamente, como los caos de uso de API o la cara de fuentes externas.


*/
dotenv.config()
connectDB()
const app = express()
app.use(cors(corsConfig))
//Loggin
app.use(morgan('dev'))
app.use(express.json()) //"Habilitar formato json"

//Routes 
app.use('/api/projects', projectRoutes)

export default app