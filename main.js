const url_details = new URL(window.location.href);
const searchP_arams = new URLSearchParams(url_details.search);
const ul = document.querySelector(".main-list");
const mainSlider = document.getElementById("swiper-wrapper");
const headerDiv = document.getElementById("header-div");

const select1 = searchParams.get("selected");

async function displayHeader(params) {
  const results = await getMoviesAndTvSHows(params);

  results?.results.forEach((movie) => {
    mainSlider.appendChild(
      headerCard(movie.id, movie.poster_path, movie.vote_average)
    );
  });
}

async function popularMovies(params) {
  const results = await getMoviesAndTvSHows(params);
  results?.results.forEach((movie) => {
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

Array.from(headerDiv.children).forEach((child) => {
  child.addEventListener("click", (e) => {
    window.location.href = `index.html?selected=${e.target.id}`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const selectOptions = select1 || "movie";
  startSwiper();
  popularMovies({ selected: selectOptions });
  displayHeader({ selected: selectOptions });

  setTimeout(() => {
    getIds(mainSlider.children), getIds(ul.children);
  }, 500);
});
