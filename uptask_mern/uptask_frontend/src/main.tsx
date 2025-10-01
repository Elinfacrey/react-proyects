import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './index.css'
import Router from './router'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router></Router>
    <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
   
  </StrictMode>,
)



/* 
Queries(useQuery) --> Se utiliza para obtener datos de un servidor o una API(GET)
Mutation(useMutation) --> Se utilizan para crear/actualizar/eliminar datos en el servidor (POST, PUT, PATCH, DELETE)

*/