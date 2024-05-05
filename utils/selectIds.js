function getIds(list, url) {
  Array.from(list).forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = `${url}.html?id=${card.dataset.id}`;
    });
  });
}
