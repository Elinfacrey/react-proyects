import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Notification from '../components/Notification'
import { useAppStore } from '../stores/useAppStore'



//EN EL MAIN ESTARÁ EL CONTENIDO DE CADA PÁGINA
export default function Layout() {

    const loadFromStorages = useAppStore((state) => state.loadFromStorages)

    useEffect(() => loadFromStorages(), [])

    return (
        <>
            <Header></Header>

            <main className='container mx-auto py-16'>
                <Outlet></Outlet>
            </main>
            <Modal>

            </Modal>
            <Notification>

            </Notification>

        </>
    )
}
