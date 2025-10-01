import { Router } from 'express'
import { body, param } from 'express-validator'
import { ProjectController } from '../controller/ProjectController'
import { handleInputErrows } from '../middleware/validation'
import { TaskController } from '../controller/TaskController'
import { projectExists } from '../middleware/project'
import Task from '../models/Task'
import { taskBelongsToProject, taskExists } from '../middleware/task'
const router = Router()





router.post('/',
    body('projectName')
        .notEmpty().withMessage('El nombre del Proyecto es Obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El nombre del Cliente es Obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripción del Proyecto  es obligatoria'),
    handleInputErrows,
    ProjectController.createProject)

router.get('/', ProjectController.getAllProjects)
router.get('/:id', param('id').isMongoId().withMessage('ID no válido')
    , handleInputErrows,
    ProjectController.getProjectById)

router.put('/:id', param('id').isMongoId().withMessage('ID no válido')
    , body('projectName')
        .notEmpty().withMessage('El nombre del Proyecto es Obligatorio'),
    body('clientName')
        .notEmpty().withMessage('El nombre del Cliente es Obligatorio'),
    body('description')
        .notEmpty().withMessage('La descripción del Proyecto  es obligatoria'),

    handleInputErrows,
    ProjectController.updateProject)

router.delete('/:id', param('id').isMongoId().withMessage('ID no válido')
    , handleInputErrows,
    ProjectController.deleteProjectById)


router.param('projectId', projectExists) //En todas las URLS que tengan project ID se ejecutará validateProjectExists

router.post('/:projectId/tasks',

    body('name')
        .notEmpty().withMessage('El nombre de la tarea '),
    body('description')
        .notEmpty().withMessage('La descripción de la tarea  es obligatoria'),

    TaskController.createTask
)

router.get('/:projectId/tasks',

    TaskController.getProjectTasks
)

router.param('taskId', taskExists)
router.param('taskId', taskBelongsToProject)
router.get('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no válido')
    , handleInputErrows,

    TaskController.getTaskById
)

router.put('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no válido')
    , body('name')
        .notEmpty().withMessage('El nombre de la tarea '),
    body('description')
        .notEmpty().withMessage('La descripción de la tarea  es obligatoria'),


    handleInputErrows,
    TaskController.updateTask

    
)

router.delete('/:projectId/tasks/:taskId',
    param('taskId').isMongoId().withMessage('ID no válido'),
    handleInputErrows,
    TaskController.deleteTask
)

router.post('/:projectId/tasks/:taskId/status',
    param('taskId').isMongoId().withMessage('ID no válido'),
    body('status').notEmpty().withMessage('El estado es obligatorio'),
    handleInputErrows,
    TaskController.updateStatus
)



export default router
