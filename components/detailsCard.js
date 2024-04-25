function detailsCard(data) {
  const { title, vote_average, release_date, overview, genres, homepage } =
    data;
  const div = document.createElement("div");
  div.classList.add("details-card");
  div.appendChild(displayTitle(title));
  div.appendChild(scoreAverage(vote_average));
  div.appendChild(displayReleaseDate(release_date));
  div.appendChild(overView(overview));
  div.appendChild(displayGenres(genres));
  div.appendChild(buttonMovieHomePage(homepage));
  return div;
}

function buttonMovieHomePage(url) {
  const btn = document.createElement("button");
  btn.classList.add("btn-movie-home-page");
  btn.textContent = "Visit Movie Homepage";

  btn.addEventListener("click", () => (window.location.href = url));

  return btn;
}

function displayGenres(genres) {
  const div = document.createElement("div");
  div.classList.add("genres");
  div.textContent = `Generes: ${genres.map((genre) => genre.name)}  `;

  return div;
}
