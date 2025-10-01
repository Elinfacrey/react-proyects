import { create } from "zustand";
import {devtools} from 'zustand/middleware'
import { RecipesSliceType,createRecipesSlice } from "./recipeSlice";
import { createfavoritesSlice,favoriteSliceType } from "./favouritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";



//CON EL ...a copia todos los tres métodos qe hay
export const useAppStore = create<RecipesSliceType & favoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createfavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))