const favContainerEl = document.querySelector(".recommendationsContainer");
const renderRecipesEL = document.querySelector(".overview");

const baseURL = "https://foodapi.starsingh.dk/wp-json/wp/v2/posts";
const urlCategoryRecipe = "?categories=3&per_page=100";

fetch(baseURL + urlCategoryRecipe)
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);

    // Create a deep copy of posts for shuffling
    const shuffledPosts = [...posts].sort(() => 0.5 - Math.random());
    const selectedPosts = shuffledPosts.slice(0, 4);

    favContainerEl.innerHTML = '';
    renderRecipesEL.innerHTML = '';

    selectedPosts.forEach((post) => {
      const favArticleHTML = `
        <article>
          <div class="articleImg" style="background: url('${post.acf.image.link}') center no-repeat;"></div>
          <div class="cardInfo" id="${post.id}">
            <h3>${post.acf.title}</h3>
            <div>
              <img src="./assets/img/icons/clock-regular.svg" alt="" class="infoIcon">
              <p>${post.acf.cooking_time ? post.acf.cooking_time.name : 'No cooking time available'}</p>
              <img src="./assets/img/icons/utensils-solid.svg" alt="" class="infoIcon">
            </div>
          </div>
        </article>`;
      favContainerEl.innerHTML += favArticleHTML;
    });

    // Use the original posts array for rendering all recipes
    posts.forEach((post) => {
      const articleHTML = `
        <article>
          <div class="articleImg" style="background: url('${post.acf.image.link}') center no-repeat;"></div>
          <div class="cardInfo" id="${post.id}">
            <h3>${post.acf.title}</h3>
            <div>
              <img src="./assets/img/icons/clock-regular.svg" alt="" class="infoIcon">
              <p>${post.acf.cooking_time ? post.acf.cooking_time.name : 'No cooking time available'}</p>
              <img src="./assets/img/icons/utensils-solid.svg" alt="" class="infoIcon">
            </div>
          </div>
        </article>`;
      renderRecipesEL.innerHTML += articleHTML;
    });
  })
  .catch((err) => {
    console.log("Something went wrong, try again later", err);
  });
