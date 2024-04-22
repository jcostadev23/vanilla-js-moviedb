function mainCard(imgUrl, title, release) {
  const div = document.createElement("div");
  div.classList.add("main-card");
  div.appendChild(image(imgUrl));
  div.appendChild(displayTitle(title));
  div.appendChild(displayReleaseDate(release));
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
