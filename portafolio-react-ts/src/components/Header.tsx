export default function Header() {
    return (
        <>
            <div className='bg-slate-800'>
                <div className='mx-auto container px-5 py-16'>
                    <div className='flex justify-between'>
                        <a href="/">Inicio</a>
                    </div>
                    <nav>
                        <a href="/experience">Experiencia</a>
                        <a href="/education">Formación</a>
                        <a href="/proyects">Proyectos</a>
                        <a href="/AboutMe">Sobre mí</a>
                        <a href="/contact">Contacto</a>
                    </nav>
                </div>
            </div>
        </>
    )
}