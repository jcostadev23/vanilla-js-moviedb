function mainCard(id, imgUrl, title, release, overview) {
  const ul = document.createElement("ul");
  ul.dataset.id = id;
  ul.classList.add("main-card");
  ul.appendChild(image(imgUrl));
  ul.appendChild(displayTitle(title));

  if (overview) {
    ul.appendChild(overView(overview));
  }

  if (release) {
    ul.appendChild(displayReleaseDate(release));
  }

  return ul;
}

function displayTitle(details) {
  const li = document.createElement("li");
  li.classList.add("name");
  li.textContent = details;
  return li;
}

function displayReleaseDate(release) {
  const span = document.createElement("span");
  span.classList.add("release_date");
  span.textContent = `Release: ${formatDate(release)}`;
  return span;
}

function image(imgUrl) {
  const picBaseUrl = "https://image.tmdb.org/t/p/w300/";
  const imageValidation = imgUrl ? picBaseUrl + imgUrl : "./img/no-image.jpg";
  const img = document.createElement("img");
  img.classList.add("img-swiper");
  img.src = imageValidation;

  return img;
}

function overView(overview) {
  const p = document.createElement("p");
  p.classList.add("overview");
  p.textContent = overview;

  return p;
}
