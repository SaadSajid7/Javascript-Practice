let user = JSON.parse(sessionStorage.user || null);
let fav = document.querySelector('.hi');
const heart = document.querySelector('.heart');
const heartDel = document.querySelector('.heartDel');

const setData = (data) => {
  let title = document.querySelector('title');

  const name = document.querySelector('.title h1');
  const iframe = document.querySelector('.iframe');
  const ing = document.querySelector('.pI');
  const dir = document.querySelector('.pD');
  title.innerHTML += name.innerHTML = data.title;
  iframe.src = data.iframe;
  ing.innerHTML = data.ingredients;
  dir.innerHTML = data.directions;

  // favourite
  const favBtn = document.querySelector('.heart');
  favBtn.addEventListener('click', () => {
    favBtn.innerHTML = favourite('favorites', data);
  })
}

// fetch data
const fetchRecipeData = () => {
  fetch('/get-recipes', {
    method: 'post',
    headers: new Headers({ 'Content-Type': 'application/json'}),
    body: JSON.stringify({id: productId})
  })
  .then(res => res.json())
  .then(data => {
    setData(data);
    getRecipes(data.tags[0]).then(data => createRecipes(data, '.container-for-recipes', 'Similar Recipes'))
  })
  .catch(err => {
    location.replace('/404');
  })
}

let productId = null;
if(location.pathname != '/recipe'){
  productId = decodeURI(location.pathname.split('/').pop());
  fetchRecipeData();
}
















// //store favourite
// let docName = `${user.email}-${productId}`
// const videoData = () => {
//   return data = {
//     email: user.email,
//     favId: docName
//   }
// }

// heart.addEventListener('click', () => {
//   fav.style.color = "#f00";
//   heartDel.style.display = "flex";
//   heart.style.display = null;
//   let data = videoData();
//   if(productId){
//     data.id = productId;
//   }
//   sendData('/add-favourite', data);
// })

// // delete favourite
// const deleteFav = (favId) => {
//   fav.style.color = "#f00";
//   heartDel.style.display = null;
//   heart.style.display = "flex";
//   fetch('/delete-favourite', {
//     method: 'post',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify({favId})
//   }).then(res => res.json())
//   .then(data => {
//     if(data == 'deleted'){
//       location.reload();
//     } else{
//       showAlertMsg('Some error occured while deleting the product. Try Again');
//     }
//   })
// }

// // fetch favourite
// const fetchFav = () => {
//   fetch('/get-favourite', {
//     method: 'post',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify({email: user.email, id: productId})
//   })
//   .then((res) => res.json())
//   .then(data => {
//     if(favId){
//       fav.style.color = "#f00";
//     }
//   })
//   .catch(err => {
//     location.replace('/404');
//   })
// }
