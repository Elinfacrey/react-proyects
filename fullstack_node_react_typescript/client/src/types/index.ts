import { boolean, number, object,string, array  } from 'valibot';


export const DraftProductSchema = object({
    name: string(),
    price: number()
})


export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

//Output toma el schema y lo convierte en un type
export const ProductsSchema = array(ProductSchema)
export type Product = {
    id: number,
    name: string,
    price: number,
    availability: boolean
}
