import { q } from './events/helpers.js';
import { loadPage, renderGifDetails, renderTrending } from './events/navigation-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { renderSearchGifs } from './events/search-events.js';
import { addQueryToStorage, getQueryStorage } from './data/query-storage.js';
import { uploadGif } from './requests/request-service.js';
import { addComment, displayComments } from './events/comments-events.js';
import { CONTAINER_SELECTOR, HOME } from './common/constants.js';
import { toAfterUploadPageView } from './views/after-upload-page-view.js';
import { toNoFileChosenView } from './views/no-file-chosen-view.js';


document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', async (event) => {

    // Navigation Events
    if (event.target.classList.contains('nav-link')) {
      await loadPage(event.target.getAttribute('data-page'));
    };

    // Home Search Button
    if (event.target.tagName === 'BUTTON' && event.target.id === 'home-search-button') {
      await loadPage(event.target.getAttribute('id'));
    }

    // Home Upload Button
    if (event.target.tagName === 'BUTTON' && event.target.id === 'home-upload-button') {
      await loadPage(event.target.getAttribute('id'));
    }

    // Search Bar
    if ((event.target.tagName === 'BUTTON' && event.target.id === 'search-btn') ||
        (event.target.classList.contains('magnifier')) ||
        event.target.tagName === 'path') {

      event.preventDefault();
      const searchInput = q('#search-input');

      if (!searchInput.value) {
        return alert('Invalid search value!');
      };

      const query = searchInput.value
        .split(' ')
        .filter(Boolean)
        .join('+');

      await renderSearchGifs(query);
      addQueryToStorage(query);

      searchInput.value = '';
    };

    // Upload Button
    if (event.target.classList.contains('upload-button')) {
      event.preventDefault();
      const inpFile = document.querySelector('input[name="gif-file"]');
      const file = inpFile.files[0];

      if (!file) {
        q(CONTAINER_SELECTOR).innerHTML = toNoFileChosenView();
        return;
      };
      const formData = new FormData();
      formData.append('file', file);

      const options = {
        method: 'POST',
        body: formData,
      };
      await uploadGif(options);
      q(CONTAINER_SELECTOR).innerHTML = toAfterUploadPageView();
    };

    // View Uploaded GIFs Button
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('view-uploaded')) {

      await loadPage(event.target.getAttribute('data-page'));
    };

    // Single GIF View
    if (event.target.tagName === 'IMG' && event.target.classList.contains('gifs')) {
      await renderGifDetails(event.target.getAttribute('id'));
      displayComments(event.target.getAttribute('id'));
    };

    // Share Button
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('share-button')) {
      const gifID = event.target.getAttribute('data-page');
      const url = `https://i.giphy.com/${gifID}.webp`;
      navigator.clipboard.writeText(url)
        .then(() => {
          alert('URL copied successfully!');
        })
        .catch(() => {
          alert('Error copying URL to clipboard');
        });
    };

    // Download Button
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('download-btn')) {
      const gifURL = event.target.getAttribute('data-gif-url');

      try {
        const response = await fetch(gifURL);
        const blob = await response.blob();

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'downloaded.gif';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading GIF:', error);
      }

    };

    // Toggle Favorite Event
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    };

    // Add Comment Event
    if (event.target.id === 'addCommentButton') {
      addComment(event.target.getAttribute('data-gif-id'));
    };

    // Selector (GIFs on Page)
    if (event.target.classList.contains('dropdown-item')) {

      if (event.target.classList.contains('search')) {
        await renderSearchGifs((getQueryStorage().join('')), (+event.target.getAttribute('data-page')));
      };

      if (event.target.classList.contains('trending')) {
        await renderTrending(+event.target.getAttribute('data-page'));
      };
    };


  });

  loadPage(HOME);
});

