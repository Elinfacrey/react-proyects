import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProjectById } from '@/api/ProjectAPI'
import EditProjectForm from '@/components/projects/EditProjectForm'
import AddTaskModal from '@/components/tasks/AddTaskModal'
import TaskList from '@/components/tasks/TaskList'

export default function ProjectDetailsView() {
    const navigate = useNavigate()
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

    if(data) return (
        <>
        <h1 className='text-5xl font-black'> {data.projectName}</h1>
        <p className='text-2xl font-light text-gray-500 mt-5'>{data.description}</p>
        <nav className='my-5 flex gap-3'>
            <button type='button' className='bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl
            font-bold cursor-pointer transition-colors'
            onClick={()  => navigate(location.pathname + '?newTask=true') }
            
            >Agregar tarea</button>
        </nav>
        <TaskList tasks={data.tasks}></TaskList>
        <AddTaskModal>
        
        </AddTaskModal>
        </>
    )

    
    return (
        <div>
            <p>Página de Editar</p>
        </div>
    )
}
