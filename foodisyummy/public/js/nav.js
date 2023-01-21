const createNav = () => {
  let nav = document.querySelector("#navbar");

  nav.innerHTML = `
  <nav class="navbar navbar-expand-lg sticky-top shadow bg-white">
    <div class="container-fluid">
      <a class="navbar-brand links" href="./index.html" >
        <img src="./img/logo.png" alt="logo" class="logo" style="height: 50px; width: auto" />
      </a>
      <button
        class="fa-solid fa-bars navbar-btn navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      ></button>
      <div
        class="offcanvas-lg offcanvas-end"
        tabIndex="-2"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div class="offcanvas-header">
          <h5
            class="offcanvas-title" id="offcanvasResponsiveLabel"
          >
            <img src="./img/logo.png" alt="" style="height: 30px; width: auto" />
          </h5>
          <button
            type="button"
            class="fa-solid fa-xmark navbar-btn bg-transparent"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body justify-content-between">
          <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
            <li
              class="nav-item my-2"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
            >
              <a
                class="navbar-links links"
                aria-current="page"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li class="nav-item my-2" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive">
              <a
                class="navbar-links links"
                aria-current="page" href="./recipes.html">
                Categories
              </a>
            </li>
            <li
              class="nav-item my-2"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
            >
              <a
                class="navbar-links links"
                href="./aboutus.html"
              >
                About Us
              </a>
            </li>
            <li
              class="nav-item my-2"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
            >
              <a class="navbar-links links" href="/contactus.html">Contact Us</a>
            </li>
          </ul>
          <div class="d-flex mb-3 mb-lg-0">
            <a id="loginBtn" href='./login.html'>
              <button class="myBtn px-4 py-2 bg-color mx-2">Login</button>
            </a>
            <a id="signupBtn" href='./signup.html'>
              <button class="myBtn px-4 py-2 bg-color mx-2">Signup</button>
            </a>
          </div>
          <button class="myBtn px-4 py-2 bg-color mx-2" id="logoutBtn" onClick="handleLogout">Logout</button>  
        </div>
      </div>
    </div>
  </nav>
  `;
};

createNav();


function loggedInOrNot() {
  let user = sessionStorage.user;
  if (user != null) {
    // means user is logged in
    signupBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    logoutBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.replace("./login.html");
    });
  } else {
    // user is logged out
    signupBtn.style.display = "block";
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
};
loggedInOrNot();