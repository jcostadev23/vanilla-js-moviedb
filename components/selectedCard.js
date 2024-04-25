const list = document.querySelector(".main-list");

function getIds() {
  Array.from(list.children).forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "details.html?id=" + card.dataset.id;
    });
  });
}

document.addEventListener("DOMContentLoaded", () =>
  setTimeout(() => getIds(), 500)
);
