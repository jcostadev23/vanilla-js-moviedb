const ul = document.querySelector(".main-list");
const mainSlider = document.getElementById("swiper-wrapper");

async function displayHeader() {
  const results = await getMoviesAndTvSHows(config.sort_by_now_playing);

  results?.forEach((movie) => {
    mainSlider.appendChild(
      headerCard(movie.id, movie.poster_path, movie.vote_average)
    );
  });
}

async function popularMovies() {
  const results = await getMoviesAndTvSHows(config.sort_by_popularity);
  results?.forEach((movie) => {
    ul.appendChild(
      mainCard(movie.id, movie.poster_path, movie.title, movie.release_date)
    );
  });
}

async function searchOptions(formValue) {
  const results = await getSelectedOptions(formValue);
  ul.innerHTML = "";
  results?.results.forEach((item) => {
    const title = item.title ? item.title : item.name;
    const release_date = item.release_date
      ? item.release_date
      : item.first_air_date;
    ul.appendChild(mainCard(item.id, item.poster_path, title, release_date));
  });
}

displayHeader();
startSwiper();
popularMovies();

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(() => {
    getIds(mainSlider.children), getIds(ul.children);
  }, 500)
);
