const ul = document.querySelector(".movie-list");

async function popularMovies() {
  const movies = await getMovies(config.mostPopularUrl);
  movies.forEach((movie) => {
    ul.appendChild(
      movieCard(movie.poster_path, movie.title, movie.release_date)
    );
  });
}

popularMovies();
