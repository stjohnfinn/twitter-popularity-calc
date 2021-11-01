import axios from 'axios';
import cred from './credentials.js';

import {extractWords} from './tweetHandling.js';

let tweetArray = [];

const LOOKUP_ENDPOINT = 'https://api.twitter.com/1.1/search/tweets.json';

let url = LOOKUP_ENDPOINT + '?q=twitterdev%20new%20premium'

axios.get(LOOKUP_ENDPOINT, {
    headers: {
        'authorization': 'Bearer ' + cred.BEARER_TOKEN
    }
}).then( data => {
    const tweetContent = data.data.data[0].text;
    const tweetID = data.data.data[0].id;
    tweetArray.push({
        id: tweetID,
        content: extractWords(tweetContent),
    });
    console.log(tweetArray[0]);
}).catch( error => {
    console.log(error);
});

