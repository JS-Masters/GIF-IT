export {
    favoritesView
};



const favoritesView = (gifs) => gifs.map((gif) => `<img class="gifs" id=${gif.id} src="${gif.images.original.url}">`).join('\n');
