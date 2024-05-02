document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const articleID = params.get('id');
  
    fetch(`https://foodapi.starsingh.dk/wp-json/wp/v2/posts/${articleID}`)
        .then((res) => res.json())
        .then((article) => {
            console.log(article);
            
            const renderFocusedArticle = `
            <article>
                <h1 style="margin: 25px;">${article.title.rendered}</h1>
                <div style="margin: 25px;>${article.content.rendered}</div>
            </article>
            `;
  
        document.querySelector('main').innerHTML = renderFocusedArticle;
        })
        .catch((err) => {
        console.error("Something went wrong, try again later", err);
    });
});
