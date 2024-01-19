import { q } from "./events/helpers.js";
import { loadPage, renderTrending, renderGifByID, renderSearchedGifs } from "./events/navigation-events.js";



document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', async (event) => {


        if (event.target.classList.contains('nav-link')) {
            await loadPage(event.target.getAttribute('data-page'));
        };

        if (event.target.tagName === "IMG" && event.target.classList.contains('gifs')) {
            await renderGifByID(event.target.getAttribute('id'));
        };


        // Search bar
        if (event.target.tagName === 'BUTTON' && event.target.id === 'search-btn') {
            const searchInput = q('#search-input');

            const query = searchInput.value
                .split(' ')
                .filter(word => word)
                .join('+');

            await renderSearchedGifs(query);

            searchInput.value = '';
        };



        if(event.target.tagName === "BUTTON" && event.target.classList.contains('share-button')) {
            const gifID = event.target.getAttribute('data-page');
            const url = `https://i.giphy.com/${gifID}.webp`
            navigator.clipboard.writeText(url)
            .then(() => {
                alert('URL copied successfully!');
            })
            .catch(() => {
                alert('Error copying URL to clipboard');
            })
        }

    });


    document.addEventListener('change', async function (event) {

        if (event.target.id === 'gifs-number-selector') {
            await renderTrending(+event.target.value);
        };

    });




    // loadPage(HOME);

});
