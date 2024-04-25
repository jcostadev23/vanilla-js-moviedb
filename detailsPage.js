const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");
const body = document.querySelector("body");
const btn = document.getElementById("btn-back");
const div = document.getElementById("details-list");

async function details() {
  const picUrl = "https://image.tmdb.org/t/p/original";
  const resp = await getMoviesDetails(itemId);
  body.style.backgroundImage = `url(${picUrl}${resp.backdrop_path})`;
  div.appendChild(image(resp.poster_path));
  div.appendChild(detailsCard(resp));
}

btn.addEventListener("click", () => (window.location.href = "index.html"));
document.addEventListener("DOMContentLoaded", details);
