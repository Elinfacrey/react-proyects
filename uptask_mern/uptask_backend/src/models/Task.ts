import mongoose, { Schema, Document, Types } from "mongoose";
import Project from "./Project";


const taskStatus = {
    PENDING : 'pending',
    ON_HOLD : 'onHold',
    IN_PROGRESS : 'inProgress',
    UNDER_REVIEW : 'underReview',
    COMPLETED : 'completed'

} as const // al setear as const solo es read only

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus] // taskStatus solo acepta los valores de arriba

export interface ITask extends Document {
    name: string
    description: string
    project: Types.ObjectId
    status: TaskStatus
}

export const TaskSchema: Schema = new Schema({
    name: {
        type: String,
        required: true, //"obligatorio"
        trim: true, //" correo@correo.com --> corta espacios al inicio y final  "
        unique: true //"garantiza que el correo sea único"
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },
    project: {
        type: Types.ObjectId,
        ref: 'Project'
    },
    status: {
        type: String,
        enum: Object.values(taskStatus),
        default: taskStatus.PENDING
    }
}, { timestamps: true })

const Task = mongoose.model<ITask>('Task', TaskSchema)

export default Task