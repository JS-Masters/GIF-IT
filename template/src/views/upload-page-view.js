export const toUploadPageView = () => `
<div>
<form class="form" id="myForm">
  <input type="file" name="gif-file" accept=".gif">
  <input id="upload-button" type="submit" value="Upload">
</form>
<button class="view-uploaded" data-page="uploaded">View Your GIFs</button>
</div>
`;
