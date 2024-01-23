const uploadedStorage = JSON.parse(localStorage.getItem('uploaded')) || [];


/**
 * Adds a GIF ID to the uploaded storage.
 * @param {string} gifID - The ID of the GIF to be added.
 */
export const addToUploadedStorage = (gifID) => {

  uploadedStorage.push(gifID);
  localStorage.setItem('uploaded', JSON.stringify(uploadedStorage));
};


/**
 * Retrieves the uploaded storage.
 * @returns {Array} The uploaded storage.
 */
export const getUploadedStorage = () => [...uploadedStorage];
