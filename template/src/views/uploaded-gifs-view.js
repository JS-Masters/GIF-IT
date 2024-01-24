/**
 * Converts an array of GIF objects into a string of HTML image elements.
 *
 * @param {Array<object>} gifs - An array of GIF objects.
 * @returns {string} - A string of HTML image elements.
 */
export const toUploadedGIFsView = (gifs) =>{
  let innerHTML = '<h2>Here are your Uploaded GIFs:</h2>';
  gifs.map((gif) => {
    innerHTML += `
    <span id="uploaded-container">
      <img class="gifs" id=${gif.id} src="${gif.images.original.url}">
    </span>`;
  }).join('\n');
  return innerHTML;
};

