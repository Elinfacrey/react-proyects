import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderForm() {
    return (
        <>
            <div className=' section py-20 md:pt-36 scroll-m-20 w-full mx-auto container md:max-w-3xl'>
                <div className='mx-auto container px-5 py-16'>
                    <div className='flex justify-between'>
                        <div className='mx-0'>
                            <a href="/">Inicio</a>
                        </div>

                        <nav >
                            <a className='mx-5 font-bold text-white text-1xl' href="/experience">Experiencia</a>
                            <a className='mx-5 font-bold text-white text-1xl' href="/education">Formación</a>
                            <a className='mx-5 font-bold text-white text-1xl' href="/proyects">Proyectos</a>
                            <a className='mx-5 font-bold text-white text-1xl' href="/AboutMe">Sobre mí</a>
                            <a className='mx-5 font-bold text-white text-1xl' href="contact">Contacto</a>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}
