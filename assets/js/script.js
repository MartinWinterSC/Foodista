const favContainerEl = document.querySelector(".recommendationsContainer");

const baseURL = "https://foodapi.starsingh.dk/wp-json/wp/v2/posts";

fetch(baseURL+'?categories=3')
  .then((res) => res.json())
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post);

      const articleHTML = `
        <article>
          <div class="articleImg"></div>
          <div class="cardInfo" id="${post.id}">
            <h3>${post.acf.title}</h3>
            <div>
              <img src="./assets/img/icons/clock-regular.svg" alt="" class="infoIcon">
              <p></p>
              <img src="" alt="" class="infoIcon">
            </div>
          </div>
        </article>`;

      favContainerEl.innerHTML += articleHTML;
    });
  })
  .catch((err) => {
    console.log("Something went wrong, try again later", err);
  });