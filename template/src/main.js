import { q } from "./events/helpers.js";
import { loadPage, renderGifDetails, renderTrending } from "./events/navigation-events.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { renderSearchGifs } from "./events/search-events.js";
import { addQueryToStorage, getQueryStorage } from "./data/query-storage.js";
import { uploadGif } from "./requests/request-service.js";


document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', async (event) => {


        // Navigation events
        if (event.target.classList.contains('nav-link')) {
            await loadPage(event.target.getAttribute('data-page'));
        };

        // Search bar
        if (event.target.tagName === 'BUTTON' && event.target.id === 'search-btn') {
            const searchInput = q('#search-input');
            event.preventDefault();

            if (!searchInput.value) {
                return alert('Invalid search value!');
            };

            const query = searchInput.value
                .split(' ')
                .filter(word => word)
                .join('+');

            await renderSearchGifs(query);
            addQueryToStorage(query);

            searchInput.value = '';
        };

        // Upload button
        if (event.target.id === 'upload-button') {
            event.preventDefault();
            const inpFile = document.querySelector('input[name="gif-file"]');
            const file = inpFile.files[0];

            if(!file) {
               return alert('You have to choose a .gif file first!');
            };
            const formData = new FormData();
            formData.append('file', file);

            const options = {
                method: 'POST',
                body: formData
            };
            await uploadGif(options);
            alert('You uploaded your GIF successfully!');
        };

        // View uploaded GIFs button
        if (event.target.tagName === "BUTTON" && event.target.classList.contains('view-uploaded')) {

            await loadPage(event.target.getAttribute('data-page'));
        };

        // Single gif view
        if (event.target.tagName === "IMG" && event.target.classList.contains('gifs')) {
            await renderGifDetails(event.target.getAttribute('id'));
        };

        // Share button
        if (event.target.tagName === "BUTTON" && event.target.classList.contains('share-button')) {
            const gifID = event.target.getAttribute('data-page');
            const url = `https://i.giphy.com/${gifID}.webp`
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('URL copied successfully!');
                })
                .catch(() => {
                    alert('Error copying URL to clipboard');
                });
        };

        // Download button
        if (event.target.tagName === "BUTTON" && event.target.classList.contains('download-btn')) {
            const gifURL = event.target.getAttribute('data-gif-url');

            (async (gifURL) => {
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

            })(gifURL);

        };

        // Toggle favorite event
        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        };
    });

    document.addEventListener('change', async (event) => {

        if (event.target.id === 'gifs-number-selector') {
            if (event.target.classList.contains('search')) {
                // console.log(getQueryStorage());
                await renderSearchGifs((getQueryStorage().join('')), (+event.target.value))
            };

            if (event.target.classList.contains('trending')) {
                await renderTrending(+event.target.value);
            };
        };

    });

    // loadPage(HOME);
});



