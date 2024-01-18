export {
    toTrendingView,
    toGifsNumSelectorView
};

const toTrendingView = (gifs) => 
gifs.map((gif) => `<img class="gifs" id=${gif.id} src="${gif.images.original.url}">`).join('\n')



const toGifsNumSelectorView = () => `
<div>
    <label for='gifs-number-selector'><b>GIF's on page:</b></label>
    <select id='gifs-number-selector'>
        <option>10</option>
        <option>25</option>
        <option>50</option>
    </select>
</div>
<div id="trending-content">

</div>`


