import { toDetailedGifView } from '../views/gif-view.js';

/**
 * Adds a comment to the specified GIF.
 * @param {string} gifID - The ID of the GIF.
 */
export const addComment = (gifID) => {
  const comments = JSON.parse(localStorage.getItem(`comments_${gifID}`)) || [];
  const commentInput = document.getElementById('commentInput');

  comments.push(commentInput.value);

  localStorage.setItem(`comments_${gifID}`, JSON.stringify(comments));

  commentInput.value = '';

  displayComments(gifID);
};

const editComment = (gifID, commentIndex) => {
  const comments = JSON.parse(localStorage.getItem(`comments_${gifID}`)) || [];
  const newComment = prompt('Edit comment:', comments[commentIndex]);

  if (newComment !== null) {
    comments[commentIndex] = newComment;
    localStorage.setItem(`comments_${gifID}`, JSON.stringify(comments));
    displayComments(gifID);
  }
};

const deleteComment = (gifID, commentIndex) => {
  const comments = JSON.parse(localStorage.getItem(`comments_${gifID}`)) || [];
  comments.splice(commentIndex, 1);
  localStorage.setItem(`comments_${gifID}`, JSON.stringify(comments));
  displayComments(gifID);
};


/**
 * Displays the comments for a given GIF.
 * @param {string} gifID - The ID of the GIF.
 */
export const displayComments = (gifID) => {
  const comments = JSON.parse(localStorage.getItem(`comments_${gifID}`)) || [];
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '';

  comments.forEach((comment, index) => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment visible-comment';
    commentDiv.textContent = comment;


    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editComment(gifID, index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteComment(gifID, index));

    commentDiv.appendChild(editButton);
    commentDiv.appendChild(deleteButton);

    commentsContainer.appendChild(commentDiv);
  });
};

/**
 * Displays the detailed view of a GIF and its comments.
 * 
 * @param {Object} gif - The GIF object to display.
 * @returns {void}
 */
export const showDetailedGifView = (gif) => {
  const content = document.getElementById('content');

  content.innerHTML = toDetailedGifView(gif);
  displayComments(gif.id);

};
