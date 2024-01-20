export {
    addFavorite,
    removeFavorite,
    getFavorites,
};

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const addFavorite = (gifID) => {
    if (favorites.find(id => id === gifID)) {
        // Gif has already been added to favorites
        return;
    };

    // const gif = await loadGifByID(id);
    favorites.push(gifID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const removeFavorite = (gifID) => {
    favorites = favorites.filter(id => id !== gifID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

const getFavorites = () => [...favorites];