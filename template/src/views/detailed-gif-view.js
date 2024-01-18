export {
  toDetailedGifView
}

const toDetailedGifView = (gifObject) => {
return `
<div class="gif-single-view">
<h1>${gifObject.title}</h1>
<img class="gifs" id=${gifObject.id} src="${gifObject.images.original.url}">
</div>

<div class="user-info">
<h2>Uploaded by:</h2>
<img class="user-avatar" src="${gifObject.user.avatar_url}">
<a href="${gifObject.user.profile_url}" class="username-link" target="_blank">${gifObject.user.username}</a>
</div>
`
}