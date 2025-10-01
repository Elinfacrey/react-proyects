import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import AboutMePage from './views/AboutMePage'
import Experience from './views/Experience'
import Education from './views/Education'
import Proyect from './views/Proyect'
import Contact from './views/Contact'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage></IndexPage>}></Route>
                <Route path='/experience' element={<Experience></Experience>}></Route>
                <Route path='/education' element={<Education></Education>}></Route>
                <Route path='/proyects' element={<Proyect></Proyect>}></Route>
                <Route path='/AboutMe' element={<AboutMePage></AboutMePage>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>

        </BrowserRouter>
    )
}
