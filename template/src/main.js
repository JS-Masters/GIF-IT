import { q } from "./events/helpers.js";
import { loadPage, renderTrending, renderGifByID, renderSearchedGifs } from "./events/navigation-events.js";


import { UPLOAD_URL } from "./common/constants.js";



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



        if (event.target.tagName === "BUTTON" && event.target.classList.contains('share-button')) {
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


    // const myForm = document.getElementById('myForm');
   

 

    
    document.querySelector('input[type="submit"]').addEventListener('click', async (event) => {
        event.preventDefault();

        const inpFile =  document.querySelector('input[name="gif-file"]');
        const file = inpFile.files[0];
  

        const formData = new FormData();

        formData.append('file', file);

        const options = {
            method: 'POST',
            body: formData 
        }

        await uploadGif(options);

    })

    // loadPage(HOME);

});

const uploadGif = async (options) => {

    const response = await fetch(UPLOAD_URL, options);
    // const data = await response.json();
    // console.log(data);

}



