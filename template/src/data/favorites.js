let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


/**
 * Adds a GIF ID to the favorites list and stores it in local storage.
 * @param {string} gifID - The ID of the GIF to be added to favorites.
 */
export const addFavorite = (gifID) => {
  favorites.push(gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a favorite GIF from the favorites list and updates the local storage.
 * @param {string} gifID - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifID) => {
  favorites = favorites.filter(id => id !== gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the favorites array.
 *
 * @returns {Array<string>} The favorites array.
 */
export const getFavorites = () => [...favorites];
