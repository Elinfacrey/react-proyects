import server from './server'
import colors from 'colors'



/* 
QUE ES MVC?
Model View Controller 
Patrón de Arquitectura de Software que permite la separación de
obligaciones de cada pieza de tu código

Enfatiza la separación de la lógica de programación con la 
presentación 

MVC es la arquitectura más común hoy en día tanto para web y se utiliza en cualquier
lenguaje

Ventajas: 
Un mejor orden y escalabilidad en tu proyecto

Al implemenentar una arquitectura probada como MVC todos los programadores e un 
grupo saben exactamente donde encontrar el código encargado de realizar alguna tarea

Qué es MODEL
Encargado de todo lo relacionado a los datos, Base de datos y el CRUD, el modelo esta muy relacionado
a tu ORM y ODM

El modelo se encarga de consultar una base de datos pero no se encarga de mostrar esos datos

Qué es VIEW?
Se encarga de todo lo que se ve en pantalla (HTML)
El modelo se encarga de consultar la base de datos, pero la vista la que se encarga de mostrar 
los resultados

En nuestro proyecto, React es la vista

Qué es el controlador?
Es el que comunica Modelo y Vista, antes de que el modelo consulte a la base de datos el 
Controlador es el encargado de llamarlo, una vez que el modelo ya consultó la abse de datos, es el
Controlador quien le comunica a la vista los datos para que los muestre.

Qué es Router?
Encargado de registrar todas las URL´s o Endpoints que soporta nuestra aplicación.

Ejemplo: Si el usuario accede a una URL el Router ya tiene indicaciones de comunicarse con un Controlador en específico, ese
Controlador ya sabe que Modelo va a llmar y que vista va a ejecutar.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------


Nested Resource Routing(Enrutamiento de recursos anidados)

Es un patrón de diseño en la construcción de URLs para APIs, especialemente en APIs RESTful,
donde las relaciones jerárquicas entre recursos son expresadas en la estructura de la URL. Este patrón
es muy común en aplicaciones web y móviles que manejan datos relacionados en forma de recursos.

Ventajas
Nested Resource Routing

Actualmente se manejan las rutas de esta forma : /projects/:projectID/tasks (estamos creando las tareas en /tasks)
En lugar de tener solo "/tasks" y validar el proyecto en algún lugar en un campo oculto o algo similar, lo estamos enviando por medio de la URL 

mediante esta ruta podemos revisar si el proyecto existe, si tiene permisos, crear tareas en ese proyecto,

Middleware
La forma de implementarlo
Un Middleware nos va a permitir darle un mejor orden a nuestras rutas para aplicar este patrón de diseño para las URL´s 

Debido a que los Middleware se ejectuan en peticiones HTTP y antes del controlador, los hacen un gran lugar para ejecutar ciertas acciones referentes a si los
proyectos existen o si el usuario tiene permisos para acceder a él. 


REACT QUERY
Introducción y ventajas 
Qué es React Query?
React Query es una libería para obtener datos del servidor
Sus ventajas principalas son que obitiene los datos de una forma
optimizada y rápida; además cachea las consultas, sincroniza/ actualiza
los datos del servidor de forma muy simple.

Se puede utilizar con Fetch API o Axios


Términos en React Query
Introduce una gran cantidad de conceptos nuevos; pero hay 2 que son los más importantes

Queris: Se utilizan para obtener datos de un servidor o una API(Get)
Mutations: Se utilizan para crear/actualizar/eliminar datos en el servidor (POST, PUT, PATCH, DELETE)

*/


const port = process.env.PORT || 4000
//jfallamontes98
//dBdth8SpNbLheLsP
server.listen(port, () => { 
    console.log(colors.cyan.bold(`REST API funcionando en el puerto ${port}`))
}) 