const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");
const body = document.querySelector("body");
const title = document.getElementById("title");
const div = document.getElementById("details-list");

async function details() {
  const picUrl = "https://image.tmdb.org/t/p/original";
  const resp = await getMoviesDetails(itemId);
  body.style.backgroundImage = `url(${picUrl}${resp.backdrop_path})`;
  title.textContent = resp.title;
  div.appendChild(
    mainCard(
      resp.id,
      resp.poster_path,
      resp.title,
      resp.release_date,
      resp.overview
    )
  );
}

document.addEventListener("DOMContentLoaded", details);
