import { ActionFunctionArgs, Link, useLoaderData } from 'react-router-dom'
import { getProducts, updateProductAvailability } from '../services/ProductService'
import ProductDetails from '../components/ProductDetails'
import { Product } from '../types'

/**
 * LOADERS
 * REACT ROUTER
 * Utilza loaders para obtener datos de una API, similar a useEffect y colocar la respuesta en un state
 * 
 * Para ello deberás crear una función y en tu router decirle que función debe ejecutarse en el loader
 * El loader se carga antes que el componente, de esa forma obtiene los datos antes que el componente se renderice
 * 
 */


export async function loader() {
  const products = await getProducts()
  return products
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updateProductAvailability(+data.id)
  return {}
}

export default function Products() {

  const products = useLoaderData() as Product[]
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-black text-slate-500'>Probando productos</h2>
        <Link
          to={"productos/nuevo"}
          className='rounded-md bg-indigo-600 p-3 text-sm font-bold 
                 text-white shadow-sm hover:bg-indigo-500'
        >
          Agregar Producto
        </Link>
      </div>


      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Disponibilidad</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetails
                key={product.id}
                product={product}
              >

              </ProductDetails>
            ))}

          </tbody>
        </table>
      </div>
    </>


  )
}
