const list = document.querySelector(".main-list");

async function getDetails(id) {
  const resp = await getMoviesDetails(id);
}

function getIds() {
  Array.from(list.children).forEach((card) => {
    card.addEventListener("click", () => getDetails(card.dataset.id));
  });
}

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(() => getIds(), 500)
);
