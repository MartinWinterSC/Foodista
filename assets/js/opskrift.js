//Vælger de relevante HTML elementer
let inputFieldEl = document.querySelector('#input');
let plusButtonEl = document.querySelector('#plus');
let minusButtonEl = document.querySelector('#minus');

//Lægger 1 til når man trykker på +
plusButtonEl.addEventListener('click', () => {
  inputFieldEl.value = Number(inputFieldEl.value) + 1;
});

//trækker 1 fra når man trykker på - 
minusButtonEl.addEventListener('click', () => {
  inputFieldEl.value = Number(inputFieldEl.value) - 1;
});

//render recipe page
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const recipeID = params.get('id');

  fetch(`https://foodapi.starsingh.dk/wp-json/wp/v2/posts/${recipeID}`)
    .then((res) => res.json())
    .then((post) => {
      console.log(post);

      const renderIngredientsList = ingredientsListGeneration(post.acf.ingredients);
      const renderPreparationsSteps = preparationsStepsGeneration(post.acf.method);
      
      const renderFocusedRecipe = `
        <article>
          <div class="recipeInfo">
            <img
              class="recipePicture"
              src="${post.acf.image.url}"
              alt="${post.title.rendered}"
            >
            <div class="recipeText">
              <h1>${post.title.rendered}</h1>
              <div class="cookTimeIcon" id="recipeInfoAndIcon">
                <i class="fa-regular fa-clock recipeIcons"></i>
                <p class="cookTime">${post.acf.cooking_time.name}</p>
              </div>
              <p class="recipeDescription" id="recipeInfoAndIcon">
                ${post.acf.description}
              </p>
              <div class="recipeTags">
              <a href="#">Hurtigt</a>
              <a href="#">Nemt</a>
            </div>
            <div id="recipeInfoAndIcon">
              <div class="recipeFunctions">
                <i class="fa-regular fa-bookmark animatedIcon"></i>
                <p id="iconText">Gem</p>
              </div>
              <div class="recipeFunctions">
                <i class="fa-solid fa-arrow-up-from-bracket animatedIcon"></i>
                <p id="iconText">Del</p>
              </div>
              <div class="recipeFunctions">
                <i class="fa-solid fa-print animatedIcon"></i>
                <p id="iconText">Print</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <section class="recipe_cookingInfo">
        <div class="recipe_ingredientSection">
          <div class="portionSize">
            <h3 class="">Servering</h3>
            <div class="plusAndMinusPortionSize">
              <button class="recipe_lessOrMoreBtn" id="minus">-</button>
              <div class="recipe_portionResult">
                <p><input value="1" id="input"><i class="fa-solid fa-person"></i></p>
              </div>
              <button class="recipe_lessOrMoreBtn" id="plus">+</button>
            </div>
          </div>
          <div class="ingredientlist">
            <h2 class="ingredientListTitle">Ingredienser</h2>
            ${renderIngredientsList}
          </div>
            
          </div>
        </div>
        <div class="preparation">
          <h2 class="cookingTitle">Fremgangsmåde</h2>
          <div>
            ${renderPreparationsSteps}
          </div>
        </div>
      </section>
      `;

      document.querySelector('main').innerHTML = renderFocusedRecipe;
    })
    .catch((err) => {
      console.error("Something went wrong, try again later", err);
    });
});

function ingredientsListGeneration(ingredients) {
  const keys = Object.keys(ingredients).filter(key => ingredients[key].trim() !== "");
  const ingredientsList = keys.map(key => `
    <li>
      <p>${ingredients[key]}</p>
      <input type="checkbox">
    </li>
  `).join('');

  return `<ul class="recipe_checklistOfIngredient">${ingredientsList}</ul>`;
}

function preparationsStepsGeneration(method) {
  const keys = Object.keys(method).filter(key => method[key].trim() !== "");
  const preparationsSteps = keys.map(key => `
  <p id="cookingText_margin">
    ${method[key]}
  </p>
  `).join('')

  return `<p id="cookingText_margin">${preparationsSteps}`
}