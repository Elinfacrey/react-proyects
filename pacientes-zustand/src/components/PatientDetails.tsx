import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente Eliminado', {
            type: 'error'
        })
    }


    return (
        <>
            <div className="mx-5 my-10  px-5 py-10 bg-white shadow-md rounded-xl" >
                <PatientDetailItem label="ID" data={patient.id}></PatientDetailItem>
                <PatientDetailItem label="Nombre" data={patient.name}></PatientDetailItem>
                <PatientDetailItem label="Propietario" data={patient.caretaker}></PatientDetailItem>
                <PatientDetailItem label="Email" data={patient.email}></PatientDetailItem>
                <PatientDetailItem label="Fecha" data={patient.date?.toString()}></PatientDetailItem>
                <PatientDetailItem label="Síntomas" data={patient.symptoms}></PatientDetailItem>

                <div className="flex flex-col md:flex-row  justify-between gap-3 mt-10">
                    <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                    uppercarse rounded-lg"
                        onClick={() => getPatientById(patient.id)}
                    >
                        Editar
                    </button>
                    <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
                    uppercarse rounded-lg"
                        onClick={handleClick}
                    >
                        Eliminar
                    </button>

                </div>
            </div>
        </>
    )
}
