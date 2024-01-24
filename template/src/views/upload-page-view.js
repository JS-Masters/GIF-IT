/**
 * Generates the HTML markup for the upload page view.
 * @returns {string} The HTML markup for the upload page view.
 */
export const toUploadPageView = () => `
<div class="upload-form">
  <form class="form" id="myForm">
    <input class="upload-input" type="file" name="gif-file" accept=".gif">
    <input class="upload-button" type="submit" value="Upload">
  </form>
  <button class="view-uploaded" data-page="uploaded">View Your GIFs</button>
</div>
`;
