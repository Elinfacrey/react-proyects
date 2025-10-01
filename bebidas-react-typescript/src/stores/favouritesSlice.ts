import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export type favoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (recipe: Recipe['idDrink']) => boolean
    loadFromStorages: () => void
}


//get().favorites sirve para obtener states o acciones que pertenecen a este mismo slice
export const createfavoritesSlice: StateCreator<favoriteSliceType & RecipesSliceType & NotificationSliceType, [], [], favoriteSliceType> = (set, get, api) => ({
    favorites: [],

    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotifiaction({text:'Se eliminó de favoritos',error:false })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotifiaction({text:'Se agregó a favoritos',error:false })

        }

        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))

    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorages: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})