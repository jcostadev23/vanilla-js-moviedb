function getIds(list) {
  Array.from(list).forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "details.html?id=" + card.dataset.id;
    });
  });
}
