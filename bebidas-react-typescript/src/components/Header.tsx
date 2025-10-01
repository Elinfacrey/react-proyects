import { FormEvent, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'
//el nav linkd tiene un acceso en el callback para detectar la página actual


export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore(state => state.fetchCategories)
    const searchRecipes = useAppStore(state => state.searchRecipes)
    const categories = useAppStore(state => state.categories)
    const showNotifications = useAppStore((state) => state.showNotifiaction)


    useEffect(() => {
        fetchCategories()
        console.log(categories, "categories")
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(searchFilters).includes('')) {
            showNotifications({
                text: 'Es obligatorio todos los campos',
                error: true
            })

            return
        }
        searchRecipes(searchFilters)
    }

    return (

        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-10 ">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/logo.svg" alt="logotipo" className="w-32" />

                    </div>
                    <nav className='flex gap-4'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >Inicio</NavLink>
                        <NavLink to="/favoritos"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }
                        >Favoritos</NavLink>

                    </nav>

                </div>
                {isHome && (
                    <form className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
                        action="" onSubmit={handleSubmit}>
                        <div className='space-y-4' >
                            <label className='block text-white uppercase font-extrabold text-lg' htmlFor="ingredient">Nombre o Ingredientes</label>
                            <input onChange={handleChange} id='ingredient' type="text" name='ingredient' className='p-3 w-full rounded-lg focus:outline-none'
                                value={searchFilters.ingredient} placeholder='Nombre o Ingrediente. Ej Vodka, Tequila, Café'
                            />
                        </div>
                        <div className='space-y-4' >
                            <label className='block text-white uppercase font-extrabold text-lg' htmlFor="ingredient">Categoría</label>
                            <select id='category' name='category' value={searchFilters.category} onChange={handleChange} className='p-3 w-full rounded-lg focus:outline-none' >
                                <option value="">-- Seleccione--</option>
                                {categories.drinks.map((category) => (
                                    <option key={category.strCategory}
                                        value={category.strCategory}>
                                        {category.strCategory}</option>
                                ))}
                            </select>

                        </div>
                        <input type="submit" value='Buscar Recetas'
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold w-full p-2 rounded-lg' />
                    </form>
                )}
            </div>

        </header>
    )
}
