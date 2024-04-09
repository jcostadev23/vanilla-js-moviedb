function movieCard(imgUrl, title, release) {
  const div = document.createElement("div");
  div.classList.add("movie-card");
  div.appendChild(image(imgUrl));
  div.appendChild(movieTitle(title));
  div.appendChild(movieRelease(release));
  return div;
}

function movieTitle(details) {
  const div = document.createElement("div");
  div.classList.add("movie-name");
  div.textContent = details;
  return div;
}

function movieRelease(release) {
  const span = document.createElement("span");
  span.classList.add("movie-release");
  span.textContent = `Release: ${release}`;
  return span;
}
