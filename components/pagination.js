document.addEventListener("DOMContentLoaded", () => {
  const paramsUrl = new URLSearchParams(window.location.search);
  const nextPage = document.getElementById("nextPage");
  const prevPage = document.getElementById("prevPage");
  const select = paramsUrl.get("selected");
  const pageNum = paramsUrl.get("page");

  let number;

  if (pageNum == 1 || !pageNum) {
    prevPage.style.visibility = "hidden";
  }

  nextPage.addEventListener("click", () => {
    number = pageNum ? parseInt(pageNum) + 1 : 2;
    window.location.href = `index.html?selected=${
      select || "movie"
    }&page=${number}`;
  });

  prevPage.addEventListener("click", () => {
    number = parseInt(pageNum) - 1;
    window.location.href = `index.html?selected=${
      select || "movie"
    }&page=${number}`;
  });
});
