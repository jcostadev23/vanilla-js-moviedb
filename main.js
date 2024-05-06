const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const ul = document.querySelector(".main-list");
const mainSlider = document.getElementById("swiper-wrapper");

const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
};

async function displayHeader() {
  const { results } = await getMoviesAndTvSHows();

  results.forEach((movie) => {
    mainSlider.appendChild(
      headerCard(movie.id, movie.poster_path, movie.vote_average)
    );
  });
}

async function popularMovies() {
  const { results } = await getMoviesAndTvSHows("popular");
  results.forEach((movie) => {
    ul.appendChild(
      mainCard(movie.id, movie.poster_path, movie.title, movie.release_date)
    );
  });

  setTimeout(() => {
    getIds(mainSlider.children, "movie_details"),
      getIds(ul.children, "movie_details");
  }, 500);
}

async function popularShows() {
  const { results } = await getMoviesAndTvSHows("tv");
  results.forEach((tv) => {
    ul.appendChild(mainCard(tv.id, tv.poster_path, tv.name, tv.first_air_date));
  });

  setTimeout(() => {
    getIds(ul.children, "tv_details");
  }, 500);
}

function showAlert(message, className = "error") {
  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", className);
  alertEl.appendChild(document.createTextNode(message));

  document.querySelector("#alert").appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}

async function searchForm() {
  global.search.type = searchParams.get("type");
  global.search.term = searchParams.get("search-term");

  if (global.search.term !== "" && global.search.term !== null) {
    const { results, total_pages, page, total_results } =
      await getSelectedOptions();

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;

    if (results.lenght === 0) {
      showAlert("No results found");
      return;
    }

    displaySearchResults(results);
  } else {
    showAlert("Please enter a search term");
  }
}

function displaySearchResults(results) {
  ul.innerHTML = "";
  document.getElementById("total-pages").innerHTML = "";
  document.getElementById("pagination").innerHTML = "";
  document.getElementById(
    "total-pages"
  ).innerHTML = `<h3>${results.length} of ${global.search.totalResults} Results for: ${global.search.term}</h3>`;
  results.forEach((item) => {
    const title = item.title ? item.title : item.name;
    const release_date = item.release_date
      ? item.release_date
      : item.first_air_date;
    ul.appendChild(mainCard(item.id, item.poster_path, title, release_date));
  });
  setTimeout(() => {
    getIds(ul.children, `${global.search.type}_details`);
  }, 500);
  pagination();
}

function pagination() {
  const div = document.createElement("div");
  div.classList.add("pagination");
  div.innerHTML = `
  <button id="prev" class="btn-pagination">
  <i class="fas fa-chevron-left"></i>
  Prev
</button>
<button id="next" class="btn-pagination">
  Next
  <i class="fas fa-chevron-right"></i>
</button>
<div id="page-counter" class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>`;

  document.getElementById("pagination").appendChild(div);

  if (global.search.page === 1) {
    document.getElementById("prev").disabled = true;
  }

  if (global.search.page === global.search.totalPages) {
    document.getElementById("next").disabled = true;
  }

  document.getElementById("next").addEventListener("click", async () => {
    global.search.page++;
    const { results, total_pages } = await getSelectedOptions();
    global.search.totalPages = total_pages;
    displaySearchResults(results);
  });

  document.getElementById("prev").addEventListener("click", async () => {
    global.search.page--;
    const { results, total_pages } = await getSelectedOptions();
    global.search.totalPages = total_pages;
    displaySearchResults(results);
  });
}

function activePage() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active_page");
    }
  });
}

function router() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      startSwiper();
      displayHeader();
      popularMovies();
      break;
    case "/tv_shows.html":
      popularShows();
      break;
    case "/movie_details.html":
      details();
      break;
    case "/tv_details.html":
      details();
      break;
    case "/search.html":
      searchForm();
      break;
  }

  activePage();
}

router();
