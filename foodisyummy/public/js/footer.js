const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="d-flex position-relative p-5 justify-content-between flex-wrap" style="background: #404040;">
    <div class="d-flex flex-column col-md-9 col-12">
      <div class="footer">
        <h1>About Us</h1>
        <p>This channel is for cooking. This channel helps to cook amazing recipes simply. This channel also helps you
          to
          prepare delicious and amazing recipes in a fast way. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis ipsa tempora officiis sint similique! Repellendus voluptas facilis fugit sapiente harum
          laudantium
          iure animi atque assumenda obcaecati asperiores inventore explicabo non eligendi vel, dolores nam impedit
          aliquid quo distinctio eum nemo velit voluptates. Velit harum ratione, ipsa tenetur voluptatem ut nam.</p>
      </div>
      <div>
        <ul class="d-flex p-0">
          <li class="list-unstyled width-50 mx-2">
            <a href="https://www.youtube.com/@foodisyummy" target="_blank">
              <i class="fs-3 fa-brands fa-youtube"></i>
            </a>
          </li>
          <li class="list-unstyled width-50 mx-2">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fs-3 fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-unstyled width-50 mx-2">
            <a href="https://twitter.com/home?lang=en" target="_blank">
              <i class="fs-3 fa-brands fa-twitter"></i>
            </a>
          </li>
          <li class="list-unstyled width-50 mx-2">
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fs-3 fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="quick-links col-md-2 col-12">
      <h1>Quick Links</h1>
      <ul class="pt-1 list-unstyled ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Desi Recipes</a></li>
        <li><a href="#">Restaurant Style</a></li>
        <li><a href="#">Ramzan Special</a></li>
        <li><a href="#">Bakra-Eid Special</a></li>
      </ul>
    </div>
  </div>
  <div>
    <p class="text-center p-md-4 p-3 bg-white mb-0">&copy; Copyright 2022 foodisyummy, All Right Reserved.</p>
  </div>
  `;
};

createFooter();
