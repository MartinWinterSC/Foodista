const allArticlesContainerEL = document.querySelector(".allArticlesContainer")

const baseURL = "https://foodapi.starsingh.dk/wp-json/wp/v2/posts";
const urlCategoryArticle = "?categories=22";

fetch(baseURL + urlCategoryArticle)
    .then((res) => res.json())
    .then((articles) => {
        console.log(articles);

        allArticlesContainerEL.innerHTML = ''

        articles.forEach((article) => {
            const renderAllArticlesContainer =`
                <article class="article" style="background: url('${article}') center no-repeat;">
                <a href="./focusedArticle.html?id=${article.id}">
                    <div class="articleImg" id="article1"></div>
                    <h3>${article.title.rendered}</h3>
                </a>
                </article>`
            allArticlesContainerEL.innerHTML += renderAllArticlesContainer
        });
    })
    .catch((err) => {
        console.error("Something went wrong, try again later", err);
});