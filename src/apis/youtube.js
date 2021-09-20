import axios from 'axios';

const KEY = 'AIzaSyAhsJiOtTPNA3-bjPjQAR0CrIAqZUpqWR0';

// this is a preconfigured instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});