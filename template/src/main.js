import { loadPage, renderTrending } from "./events/navigation-events.js";



document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('click', async (event) => {

  
        if (event.target.classList.contains('nav-link')) {
            await loadPage(event.target.getAttribute('data-page'));
        };

    });

  
    document.addEventListener('change', async function (event) {

        if (event.target.id === 'gifs-number-selector') {
            await renderTrending(+event.target.value);
        };

    });


    // loadPage(HOME);

});
