export {
  getUploadedStorage,
  addToUploadedStorage
}


const uploadedStorage = JSON.parse(localStorage.getItem('uploaded')) || [];


const addToUploadedStorage = (gifID) => {
  
  uploadedStorage.push(gifID);
  localStorage.setItem('uploaded', JSON.stringify(uploadedStorage));
}


const getUploadedStorage = () => [...uploadedStorage];