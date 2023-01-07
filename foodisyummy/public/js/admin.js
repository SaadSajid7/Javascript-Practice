let loader = document.querySelector('.loader');
let user = sessionStorage.user;

// window.onload = () => {
//   if(user){
//     if(compareToken(user.authToken, user.email)){
//       let adminEmail = JSON.parse(sessionStorage.user).email;
//       if(adminEmail == "jujwuth2904@gmail.com"){
//         loader.style.display = "block";
//         setupRecipes();
//       } else{
//         location.replace('/404');
//       }
//     } else{
//       location.replace('/login');
//     }
//   } else{
//     location.replace('/login');
//   }
// }

const setupRecipes = () => {
  fetch('/get-recipes', {
    method: 'post',
    headers: new Headers({"Content-Type": "application/json"}),
    body: JSON.stringify({email: user.email})
  })
  .then(res => res.json())
  .then(data => {
    loader.style.display = null;
    if(data == 'no-recipes'){
      let emptySvg = document.querySelector('.no-video');
      emptySvg.style.display = "flex";
    } else{
      data.forEach(recipe => createRecipe(recipe));
    }
  });
}