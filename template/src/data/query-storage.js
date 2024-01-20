let queryStorage = JSON.parse(localStorage.getItem('query')) || [];


export const addQueryToStorage = (query) => {

  const currentQueryStored = getQueryStorage().filter((q) => q);
  if (currentQueryStored.length !== 0) {
    queryStorage.pop();
  }
  
  queryStorage.push(query);
  localStorage.setItem('query', JSON.stringify(queryStorage));
};



export const getQueryStorage = () => [...queryStorage];