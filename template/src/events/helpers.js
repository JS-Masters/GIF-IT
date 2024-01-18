export {
    q,
    qs,
    setActiveNav,
};

/**
 * Shorthand for document.querySelector
 * @param {string} selector 
 * @returns {Element}
 */
const q = (selector) => document.querySelector(selector);


/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector 
 * @returns {NodeLists<Element>}
 */
const qs = (selector) => document.querySelectorAll(selector);



const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
      );
};

