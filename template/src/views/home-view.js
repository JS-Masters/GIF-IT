/**
 * Generates the HTML markup for the home view.
 * @returns {string} The HTML markup for the home view.
 */
export const toHomeView = () => {
  return `
  <div class="home-buttons">
  <button id="home-search-button">GIF-IT A SEARCH</button>
  <button id="home-upload-button">GIF-IT AN UPLOAD</button>
  </div>
  <div class="home-info">
  <p>Your favorite GIFs database application. Here you can:</p>
    <ul>
      <li>See the current trending GIFs</li>
      <li>Add and remove GIFs from Favorites</li>
      <li>Search for GIFs by title</li>
      <li>Upload GIFs</li>
      <li>Download GIFs</li>
      <li>Share GIFs</li>
      <li>Leave comments about GIFs</li>
    </ul>
  </div>
  `;
};
