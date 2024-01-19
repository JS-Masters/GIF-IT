export {
    toGifsNumSelectorView
}

const toGifsNumSelectorView = () => `
<div>
    <label for='gifs-number-selector'><b>GIF's on page:</b></label>
    <select id='gifs-number-selector'>
        <option>10</option>
        <option>25</option>
        <option>50</option>
    </select>
</div>
<div id="content">

</div>`