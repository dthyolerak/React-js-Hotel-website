import {createClient} from 'contentful'

export default createClient({
    space: process.env.REACT_APP_THYOLERA,
    accessToken: process.env.REACT_APP_THYOLERA_ACCES_TOKEN,
   
})