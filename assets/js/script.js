const favContainerEL = document.querySelector(".recommendationsContainer");
const generalContainerEL = document.querySelector(".overview");
const heroEL = document.querySelector(".heroContainer");

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
              <p>${post.acf.cooking_time ? post.acf.cooking_time.name : 'Ikke tilgængeligt'}</p>
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
  

//hero content 
document.addEventListener('DOMContentLoaded', function() {
    function getNavID() {
        const params = new URLSearchParams(window.location.search);
        return params.get('navID');
    }

    const navID = getNavID();

    if (navID && parseInt(navID) >= 1 && parseInt(navID) <= 20) {
        let renderHero = '';

        switch (parseInt(navID)) {
            case 1:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Kødindhold...</h2>
                    <p>... er tilbage på menuen, drenge!</p>
                </div>`;
            break; 
            case 2:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Højtider</h2>
                    <p>Nu er det den tid af året igen!</p>
                </div>`;
            break;
            case 3:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Hurtigt og Nemt</h2>
                    <p>Når det bare skal være lidt nemt og hurtigt</p>
                </div>`;
            break; 
            case 4:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Geografisk</h2>
                    <p>Alt fra verdens 4 verdenhjørner</p>
                </div>`;
            break;
            case 5:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Måltidtyper</h2>
                    <p>Alt til at holde dig kørende igennem dagen</p>
                </div>`;
            break; 
            case 6:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Rød Kød</h2>
                    <p>Alt det gode fra koen og grisen</p>
                </div>`;
            break;
            case 7:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Hvidt Kød</h2>
                    <p>Fjerkræ der venter på at flyve fra reden</p>
                </div>`;
            break; 
            case 8:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Fisk og Skaldyr</h2>
                    <p>Alt godt fra havet</p>
                </div>`;
            break;
            case 9:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Vegetar og Vegansk</h2>
                    <p>Når man tænker på dyrene</p>
                </div>`;
            break; 
            case 10:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Påske</h2>
                    <p>Til påskeharrens ankomst</p>
                </div>`;
            break;
            case 11:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Jul</h2>
                    <p>Nu det jul igen...</p>
                </div>`;
            break; 
            case 12:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Hurtigt</h2>
                    <p>Fart er nøglen!</p>
                </div>`;
            break;
            case 13:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Nemt</h2>
                    <p>Skal vi ikke bare tage noget let i aften?</p>
                </div>`;
            break; 
            case 14:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Europæisk</h2>
                    <p>Alt fra pizza til borshch</p>
                </div>`;
            break;
            case 15:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Asiatisk</h2>
                    <p>Alt fra karry til sushi</p>
                </div>`;
            break; 
            case 16:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Afrikansk</h2>
                    <p> Alt fra naan til bobotie</p>
                </div>`;
            break;
            case 17:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Amerikansk</h2>
                    <p>Alt fra hamburgere til tacoer</p>
                </div>`;
            break; 
            case 18:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Morgenmad</h2>
                    <p>Det vigtigste måltid på dagen!</p>
                </div>`;
            break;
            case 19:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Frokost</h2>
                    <p>Til at holde en igang</p>
                </div>`;
            break; 
            case 20:
                renderHero = `<div class="hero" style="background: url('./assets/img/pictures/recipeHero/${navID}.jpg') center center no-repeat;">
                    <h2>Aftensmad</h2>
                    <p>Det bedste måltid på dagen!</p>
                </div>`;
            break;
            default:
                console.log('Something went wrong, try again');
            return;
      }
      heroEL.innerHTML = renderHero;

    } else {
      console.log('Invalid navID, try again buster');
    }
});


