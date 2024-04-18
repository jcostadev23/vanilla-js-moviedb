const ul = document.querySelector(".movie-list");
const mainSlider = document.getElementById("swiper-wrapper");

async function displayHeader() {
  const movies = await getMovies();

  movies.forEach((movie) => {
    mainSlider.appendChild(headerCard(movie.poster_path, movie.vote_average));
  });
}

async function popularMovies() {
  const movies = await getMovies();
  movies.forEach((movie) => {
    ul.appendChild(
      movieCard(movie.poster_path, movie.title, movie.release_date)
    );
  });
}

async function searchOptions(formValue) {
  const movies = await getSelectedOptions(formValue);
  ul.innerHTML = "";
  movies.results.forEach((movie) => {
    ul.appendChild(
      movieCard(movie.poster_path, movie.title, movie.release_date)
    );
  });
}

displayHeader();
startSwiper();
popularMovies();
