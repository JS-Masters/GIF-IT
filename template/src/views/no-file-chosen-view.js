/**
 * Generates the HTML markup for the "No File Chosen" view.
 * @returns {string} The HTML markup for the view.
 */
export const toNoFileChosenView = () => `
<div id="no-file-chosen-div">
  <h1>YOU DIDN\'T CHOOSE A FILE BRO...</h1>
  <img class="no-file-chosen" src="./images/logos/no-file-chosen.gif" alt="You have to choose a GIF file">
  <input class="upload-input" type="file" name="gif-file" accept=".gif">
  <button class="upload-button" type="submit">Upload</button> 
</div>
`;
