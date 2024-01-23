/**
 * Converts an array of GIF objects into a string of HTML image elements.
 *
 * @param {Array<object>} gifs - An array of GIF objects.
 * @returns {string} - A string of HTML image elements.
 */
export const toUploadedGIFsView = (gifs) => gifs.map((gif) => `<img class="gifs" id=${gif.id} src="${gif.images.original.url}">`).join('\n');
