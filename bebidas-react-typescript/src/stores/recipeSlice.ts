import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, SearchFilter, Drinks, Drink, Recipe } from "../types"
import { favoriteSliceType } from "./favouritesSlice"



export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => void
    closeModal: () => void
}


export const createRecipesSlice: StateCreator<RecipesSliceType & favoriteSliceType, [], [], RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: [
        ]
    },
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters);
        console.log(drinks, "drinks")
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
        console.log(selectedRecipe, "selectedRecipe")
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})

