export {
    API_KEY,
    HOME,
    TRENDING,
    CONTAINER_SELECTOR,
    CONTENT_SELECTOR,
    UPLOAD_URL,
    FAVORITES,
    FULL_HEART,
    EMPTY_HEART,
    randomGifURL
};


const API_KEY = 'Y2dRM6tx3BMNPo0bSuIVSD2N2zIxCMm8';
const randomGifURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
const HOME = 'home';
const TRENDING = 'trending';

const CONTAINER_SELECTOR = '#container';

const CONTENT_SELECTOR = '#content';

const UPLOAD_URL = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`;

const FAVORITES = 'favorites';

const FULL_HEART = '❤';

const EMPTY_HEART = '♡';