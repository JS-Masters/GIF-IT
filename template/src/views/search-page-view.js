/**
 * Generates the HTML markup for the search page view.
 * @returns {string} The HTML markup for the search page view.
 */
export const toSearchPageView = () => `
<div class="search-form">
  <form>
    <input id="search-input" type="text" placeholder="GIF-IT a Search...">
    <button id="search-btn" type="submit"><svg class="magnifier" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"></path></svg></button>
    </form>
</div>
`;
