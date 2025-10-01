import {CorsOptions} from 'cors'

export const corsConfig: CorsOptions = {
    origin: function(origin, callback) {
        const whitelist = [process.env.FRONTEND_URL,'http://localhost:4000']

        if(whitelist.includes(origin)) {
            callback(null,true)
        } else {
            console.log('ERROR CORS')
            callback(new Error('Error de CORS'))
        }
    }
}