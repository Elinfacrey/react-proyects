import { StateCreator } from "zustand";
import { favoriteSliceType } from "./favouritesSlice";


export type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotifiaction: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}


//get().favorites sirve para obtener states o acciones que pertenecen a este mismo slice
export const createNotificationSlice: StateCreator<NotificationSliceType & favoriteSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    },
    showNotifiaction: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotification()
        }, 5000);

    },
    hideNotification: () => {
        set({
            notification: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})