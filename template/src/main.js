import { q } from "./events/helpers.js";
import { loadPage, renderGifDetails, renderTrending } from "./events/navigation-events.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { UPLOAD_URL } from "./common/constants.js";
import { renderSearchGifs } from "./events/search-events.js";
import { addToUploadedStorage } from "./data/uploaded.js";
import { addQueryToStorage, getQueryStorage } from "./data/query-storage.js";


document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', async (event) => {


        // Navigation events
        if (event.target.classList.contains('nav-link')) {
            await loadPage(event.target.getAttribute('data-page'));
        };

        // Single gif view
        if (event.target.tagName === "IMG" && event.target.classList.contains('gifs')) {
            await renderGifDetails(event.target.getAttribute('id'));
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


        // share button
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


        // toggle favorite event
        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        };


        //view uploaded GIFs button
        if (event.target.tagName === "BUTTON" && event.target.classList.contains('view-uploaded')) {

            await loadPage(event.target.getAttribute('data-page'));
        }
    });



    document.addEventListener('change', async (event) => {

        if (event.target.id === 'gifs-number-selector') {
            if (event.target.classList.contains('search')) {
                // console.log(getQueryStorage());
                await renderSearchGifs((getQueryStorage().join('')), (+event.target.value))
            }
            if (event.target.classList.contains('trending')) {
                await renderTrending(+event.target.value);
            }

        };

    });


    document.querySelector('input[type="submit"]').addEventListener('click', async (event) => {
        event.preventDefault();

        const inpFile = document.querySelector('input[name="gif-file"]');
        const file = inpFile.files[0];


        const formData = new FormData();

        formData.append('file', file);
        console.dir(formData);
        const options = {
            method: 'POST',
            body: formData
        }

        await uploadGif(options);

    });


    // loadPage(HOME);

});

const uploadGif = async (options) => {

    const response = await fetch(UPLOAD_URL, options);
    const result = await response.json();
    addToUploadedStorage(result.data.id);
    // console.log(data);

};



