import { loadPage, renderTrending, renderGifByID } from "./events/navigation-events.js";



document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('click', async (event) => {

  
        if (event.target.classList.contains('nav-link')) {
            await loadPage(event.target.getAttribute('data-page'));
        };

        if(event.target.tagName === "IMG" && event.target.classList.contains('gifs')) {
            await renderGifByID(event.target.getAttribute('id'));
        }

    });

  
    document.addEventListener('change', async function (event) {

        if (event.target.id === 'gifs-number-selector') {
            await renderTrending(+event.target.value);
        };

    });


    // loadPage(HOME);

});
