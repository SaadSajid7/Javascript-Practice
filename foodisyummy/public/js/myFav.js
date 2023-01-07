// create favourites
const createFavRecipes = (data) => {
  return `
  <div class="sm-recipe">
    <img src="${data.thumbnail}" class="sm-recipe-img">
    <div class="sm-text">
      <p class="sm-recipe-name">${data.name}</p>
    </div>
    <button class="sm-delete-btn"><i class="fa-solid fa-xmark"></i></button>
  </div>
  `;
}

const setRecipes = (name) => {
  const element = document.querySelector(`.fav`);
  let data = JSON.parse(localStorage.getItem(name));
  if(data == null){
    element.innerHTML = `<img src="img/empty-fav.png" class="empty-img">`;
  } else{
    for(let i = 0; i < data.length; i++){
      element.innerHTML += createFavRecipes(data[i]);
    }
  }
  setupEvents(name);
}

const setupEvents = (name) => {
  const deleteBtn = document.querySelectorAll('.sm-delete-btn');

  let recipe = JSON.parse(localStorage.getItem(name));

  deleteBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      recipe = recipe.filter((data, index) => index != i);
      localStorage.setItem(name, JSON.stringify(recipe));
      location.reload();
    })
  })
}

setRecipes('favorites');