import { safeParse } from "valibot"
import axios from "axios"
import { DraftProductSchema, ProductSchema, ProductsSchema, Product } from "../types"
import { toBoolean } from "../utils"


type ProductData = {
    [k: string]: FormDataEntryValue
}

/**
 * CORS
 * QUE ES? Y VENTAJAS
 * CORS, POR SUS SIGLAS EN INGLES CROSS-ORIGIN RESOURCE SHARING
 * COMPARTIR RECURSOS ENTRE DIFERENTES ORIGENES, es un mecanismo de seguridad
 * utilizado en los navegadores web para controlar las solicitudes de recursos entre
 * dominios diferentes. En escencia, CORS es una política de seguridad implementada
 * en el lado del servidor que permite o deniega las solicitudes se recursos web
 * de un origen cruzado
 * 
 * ORIGEN CRUZADO O CROSS ORIGIN
 * Cuando un recurso(como una fuente, una imagen o una hoja de estilo)
 * se solicita desde un dominio o puerto diferente al del origen del recurso actual,
 * se considera una solicitud de origen cruzado. Antes de que se implementara CORS, los
 * navegadores web modernos restringían automáticamente las solicitudes de origen cruzado
 * para prevenir ataques de seguridad como el secuestro de sesiones y la inyección
 * de scripts maliciosos
 * 
 * VENTAJAS
 * CORS permite a los servidores tener un control más granular sobre qué dominios pueden
 * acceder a los recursos. Esto reduce la posibilidad de ataques maliciosos de origen cruzado
 * 
 * Acceso controlado a recursos: CORS permite a los sitios web controlar qué recursos están disponibles 
 * para ser solicitados por dominios externos y qué recursos están restringidos. Esto brinda mayor
 * control sobre los datos y recursos del sitio web.
 * 
 * Interoperabilidad: Cors facilita el intercambio de datos y recursos entre diferentes
 * domonios. Esto es particularmente útil en situaciones en las que una página web
 * necesita cargar recursos de múltiples dominios para funcionar correctamente, como los casos
 * de uso de API a la carga de fuentes externas.
 */

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price

        })
        if (result.success) {
            const url = `http://localhost:4000/api/productos`
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })

        } else {
            throw new Error('Datos no válidos')
        }
    } catch (error) {
        console.log(error)
    }
    console.log(data)
}

export async function getProducts() {
    try {
        const url = `http://localhost:4000/api/productos`
        const { data } = await axios(url)
        const result = safeParse(ProductsSchema, data.data)
        if (result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error')
        }

    } catch (error) {
        console.log(error)
    }
}

export async function getProductById(id: Product['id']) {
    try {
        const url = `http://localhost:4000/api/productos/${id}`
        const { data } = await axios(url)
        const result = safeParse(ProductSchema, data.data)
        console.log(result)
        if (result.success) {
            return result.output
        } else {
            throw new Error('Hubo un error')
        }


    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(data: ProductData, id: Product['id']) {
    try {

        const result = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: +data.price,
            availability: toBoolean(data.availability.toString())
        })

        if (result.success) {
            const url = `http://localhost:4000/api/productos/${id}`
            await axios.put(url, result.output)
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProduct(id: Product['id']) {
    try {
        const url = `http://localhost:4000/api/productos/${id}`
        await axios.delete(url)
    } catch (error) {
        console.log(error)
    }
}

export async function updateProductAvailability(id: Product['id']) {
    try {
        const url = `http://localhost:4000/api/productos/${id}`
        await axios.patch(url)
    } catch (error) {
        console.log(error)
    }
}