function detailsCard(data) {
  const {
    title,
    name,
    vote_average,
    release_date,
    first_air_date,
    overview,
    genres,
    homepage,
  } = data;

  const ul = document.createElement("ul");
  ul.classList.add("details-card");
  ul.appendChild(displayTitle(title ?? name));
  ul.appendChild(scoreAverage(vote_average));
  ul.appendChild(displayReleaseDate(release_date ?? first_air_date));
  ul.appendChild(overView(overview));
  ul.appendChild(displayGenres(genres));
  ul.appendChild(buttonMovieHomePage(homepage));
  return ul;
}

function buttonMovieHomePage(url) {
  const btn = document.createElement("button");
  btn.classList.add("btn-movie-home-page");
  btn.textContent = "Visit Movie Homepage";

  btn.addEventListener("click", () => (window.location.href = url));

  return btn;
}

function displayGenres(genres) {
  const li = document.createElement("li");
  li.classList.add("genres");
  li.textContent = `Generes: ${genres.map((genre) => genre.name)}  `;

  return li;
}
