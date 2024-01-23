const queryStorage = JSON.parse(localStorage.getItem('query')) || [];


/**
 * Adds a query to the storage.
 * @param {string} query - The query to be added.
 */
export const addQueryToStorage = (query) => {

  const currentQueryStored = getQueryStorage().filter(Boolean);
  if (currentQueryStored.length !== 0) {
    queryStorage.pop();
  }

  queryStorage.push(query);
  localStorage.setItem('query', JSON.stringify(queryStorage));
};


/**
 * Retrieves the query storage.
 * @returns {Array<string>} The query storage.
 */
export const getQueryStorage = () => [...queryStorage];
