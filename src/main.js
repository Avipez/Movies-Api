async function getTrendingMoviesPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    console.log({data, movies});

    movies.forEach( movie => {
        const trendingPreviewMoviesContainer = document.querySelector("#trendingPreview .trendingPreview-movieList")

        const movieSlide = document.createElement("div");
        movieSlide.classList.add("movie-container");

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w300/${movie.poster_path}`);

        movieSlide.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieSlide);

    });
};


async function getMovieCategories() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();

    const categories = data.genres;
    console.log({data, categories});

    categories.forEach( category => {
        const categoryPreviewContainer = document.querySelector("#categoriesPreview .categoriesPreview-list")

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category-container");

        const categoryTitle = document.createElement("h3");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", "id" + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoryPreviewContainer.appendChild(categoryContainer);
    });

}

getTrendingMoviesPreview();
getMovieCategories();