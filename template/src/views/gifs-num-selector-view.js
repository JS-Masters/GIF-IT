export {
  toGifsNumSelectorView,
};

const toGifsNumSelectorView = (page) => `
<div class="${page} dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    GIFs on Page:
  </button>
  <ul class="dropdown-menu">
    <li><button class="${page} dropdown-item" type="button" data-page="10">10</button></li>
    <li><button class="${page} dropdown-item" type="button" data-page="25">25</button></li>
    <li><button class="${page} dropdown-item" type="button" data-page="50">50</button></li>
  </ul>
</div>
<div id="content">
</div>
  `;
