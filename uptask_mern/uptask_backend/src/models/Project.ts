import mongoose, {Schema, Document, PopulatedDoc, Types} from "mongoose";
import { ITask } from "./Task";

const taskStatus = {
    PENDING: 'pending',
    ON_HOLD: 'onHold',
    IN_PROGRESS: 'inProgress',
    UNDER_REVIEW: 'underReview',
    COMPLETED: 'completed'
} as const

export interface IProject extends Document  {
    projectName : string
    clientName : string
    description: string
    tasks: PopulatedDoc<ITask & Document>[] // forma de traernos una referencia de la tarea 
}

const ProjectSchema: Schema = new Schema({
    projectName: {
        type: String,
        required: true, //"obligatorio"
        trim:true, //" correo@correo.com --> corta espacios al inicio y final  "
        unique: true //"garantiza que el correo sea único"
    },
    clientName: {
        type: String,
        required: true, 
        trim:true,
    },
    description: {
        type: String,
        required: true, 
        trim:true,
    },
    tasks:[
        {
            type: Types.ObjectId,
            ref: 'Task'
        }
    ]

},{timestamps: true}) // cada que creas un registro se muestra cuando se creó y la última actualizacion.

const Project = mongoose.model<IProject>('Project', ProjectSchema)
export default Project
