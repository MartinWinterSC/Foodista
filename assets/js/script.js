const favContainerEL = document.querySelector(".recommendationsContainer");
const generalContainerEL = document.querySelector(".overview");

const baseURL = "https://foodapi.starsingh.dk/wp-json/wp/v2/posts";
const urlCategoryRecipe = "?categories=3&per_page=100";

fetch(baseURL + urlCategoryRecipe)
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);

    const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
    const selectedPosts = shuffledPosts.slice(0, 4);

    favContainerEL.innerHTML = '';
    generalContainerEL.innerHTML = '';

    selectedPosts.forEach((post) => {
      const renderFavArticle = `
        <article>
        <a href="./Opskriften.html?id=${post.id}">
          <div class="articleImg" style="background: url('${post.acf.image.link}') center no-repeat;"></div>
          <div class="cardInfo" id="${post.id}">
            <h3>${post.acf.title}</h3>
            <div>
              <img src="./assets/img/icons/clock-regular.svg" alt="" class="infoIcon">
              <p>${post.acf.cooking_time ? post.acf.cooking_time.name : ''}</p>
              <img src="./assets/img/icons/utensils-solid.svg" alt="" class="infoIcon">
            </div>
          </div>
        </a>
        </article>`;
      favContainerEL.innerHTML += renderFavArticle;
    });

    posts.forEach((post) => {
      const renderGeneralArticle = `
        <article>
        <a href="./Opskriften.html?id=${post.id}">
          <div class="articleImg" style="background: url('${post.acf.image.link}') center no-repeat;"></div>
          <div class="cardInfo" id="${post.id}">
            <h3>${post.acf.title}</h3>
            <div>
              <img src="./assets/img/icons/clock-regular.svg" alt="" class="infoIcon">
              <p>${post.acf.cooking_time ? post.acf.cooking_time.name : ''}</p>
              <img src="./assets/img/icons/utensils-solid.svg" alt="" class="infoIcon">
            </div>
          </div>
        </a>
        </article>`;
      generalContainerEL.innerHTML += renderGeneralArticle;
    });
  })
  .catch((err) => {
    console.error("Something went wrong, try again later", err);
  });
