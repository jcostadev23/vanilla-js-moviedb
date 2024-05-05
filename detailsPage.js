const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get("id");
const container = document.getElementById("container");
const btn = document.getElementById("btn-back");
const div = document.getElementById("details-list");

async function details() {
  const pageOption =
    global.currentPage === config.selected_page ? "movie" : "tv";
  const picUrl = "https://image.tmdb.org/t/p/original";
  const resp = await getDetails(itemId, pageOption);
  container.style.backgroundImage = `url(${picUrl}${resp.backdrop_path})`;
  container.style.backgroundSize = "cover";
  container.style.backgroundPosition = "center";
  container.style.backgroundRepeat = "no-repeat";
  container.style.height = "100vh";
  container.style.width = "100vw";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0";
  container.style.zIndex = "-1";
  container.style.opacity = "0.5";
  div.appendChild(image(resp.poster_path));
  div.appendChild(detailsCard(resp));
}

btn.addEventListener("click", () => (window.location.href = "index.html"));
