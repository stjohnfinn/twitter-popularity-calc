import axios from 'axios';
import cred from './credentials.js';

const LOOKUP_ENDPOINT = 'https://api.twitter.com/2/tweets?ids=1228393702244134912';

axios.get(LOOKUP_ENDPOINT, {
    headers: {
        'authorization': 'Bearer ' + cred.BEARER_TOKEN
    }
}).then( data => {
    console.log(data.data);
}).catch( error => {
    console.log(error);
})

