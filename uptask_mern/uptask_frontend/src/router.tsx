import {BrowserRouter,Routes, Route } from 'react-router-dom'
import AppLoyout from './layouts/AppLoyout'
import DashboardView from '@/views/DashboardView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import ProjectDetailsView from './views/projects/ProjectDetailsView'


export default function Router() {
    return (<BrowserRouter>
        <Routes>
                <Route element={<AppLoyout></AppLoyout>}>
                
                    <Route path='/' element={<DashboardView></DashboardView>} index></Route>
                    <Route path='/projects/create' element={<CreateProjectView></CreateProjectView>}></Route>
                    <Route path='/projects/:projectId' element={<ProjectDetailsView></ProjectDetailsView>}></Route>
                    <Route path='/projects/:projectId/edit' element={<EditProjectView></EditProjectView>}></Route>



                </Route>
        </Routes>
    </BrowserRouter>)
}