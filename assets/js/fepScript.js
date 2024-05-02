document.addEventListener('DOMContentLoaded', async function () {
    const fepContainerEL = document.querySelector(".fepContainer");

    const baseURL = "https://foodapi.starsingh.dk/wp-json/wp/v2/posts";
    const urlCategoryRecipe = "?categories=3&per_page=100";

    try {
        const response = await fetch(baseURL + urlCategoryRecipe);
        const posts = await response.json();
        
        console.log(posts);

        const shuffledPosts = posts.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffledPosts.slice(0, 3);

        fepContainerEL.innerHTML = '';

        selectedPosts.forEach((post) => {
            const renderFepRecipe = `
                <article class="fepSingle" style="background: url('${post.acf.image.link}') center no-repeat;">
                    <a href="./Opskriften.html?id=${post.id}">
                        <div class="overlay">
                            <h5>${post.acf.title}</h5>
                        </div>
                    </a>
                </article>`;
            fepContainerEL.innerHTML += renderFepRecipe;
        });
    } catch (err) {
        console.error("Something went wrong, try again later", err);
    }
});
