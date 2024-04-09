const slider = document.getElementById('swiper-wrapper');

async function displayHeader() {
  const movies = await getMovies();

  movies.forEach((movie) => {
    slider.appendChild(headerCard(movie.poster_path, movie.vote_average));
  });
}

displayHeader();
startSwiper();
