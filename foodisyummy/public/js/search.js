const searchKey = decodeURI(location.pathname.split('/').pop());

const searchSpanElement = document.querySelector('#search-key');
searchSpanElement.innerHTML = searchKey;

getRecipes(searchKey).then(data => createRecipes(data, '.recipe-container'));