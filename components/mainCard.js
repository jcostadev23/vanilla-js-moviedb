function mainCard(id, imgUrl, title, release, overview) {
  const div = document.createElement("div");
  div.dataset.id = id;
  div.classList.add("main-card");
  div.appendChild(image(imgUrl));
  div.appendChild(displayTitle(title));

  if (overview) {
    div.appendChild(overView(overview));
  }

  if (release) {
    div.appendChild(displayReleaseDate(release));
  }

  return div;
}

function displayTitle(details) {
  const div = document.createElement("div");
  div.classList.add("name");
  div.textContent = details;
  return div;
}

function displayReleaseDate(release) {
  const span = document.createElement("span");
  span.classList.add("release_date");
  span.textContent = `Release: ${formatDate(release)}`;
  return span;
}

function image(imgUrl) {
  const picBaseUrl = "https://image.tmdb.org/t/p/w300/";
  const img = document.createElement("img");
  img.classList.add("img-swiper");
  img.src = picBaseUrl + imgUrl;

  return img;
}

function overView(overview) {
  const p = document.createElement("p");
  p.classList.add("overview");
  p.textContent = overview;

  return p;
}
