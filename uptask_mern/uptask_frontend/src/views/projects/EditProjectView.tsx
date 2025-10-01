import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProjectById } from '@/api/ProjectAPI'
import EditProjectForm from '@/components/projects/EditProjectForm'

export default function EditProjectView() {
    const params = useParams() //este hook toma los parámetros de la url
    const projectId = params.projectId! // el signo de exclamación indica que ese projectId siemrpe va a existir

     //el query key tiene que ser único, si e tiene otra página y se tiene el mismo query key detectará que ya existe
        //en las consultas previas y te devolverá la misma data
        //Por que no se deja solo editProject, si se presionan EditarProyecto en dos proyectos distinos
        //es el mismo queryKey para ambos. Para que sean únicos y no estén cacheados y detecten que es un valor diferente y haga una consulta nueva
        //cada vez que se llame a una función que tiene parámetro de hace con callback
    const { data, isLoading, isError } = useQuery({
       
        queryKey: ['editProject', projectId], 
        queryFn: () => getProjectById(projectId), 
        retry: false
    })
    console.log(projectId,"projectId 21")
    if(isLoading) return 'Cargando...'
    if(isError) return <Navigate to="/404"></Navigate>

    if(data) return <EditProjectForm data={data} projectId={projectId}></EditProjectForm>

    
    return (
        <div>
            <p>Página de Editar</p>
        </div>
    )
}
