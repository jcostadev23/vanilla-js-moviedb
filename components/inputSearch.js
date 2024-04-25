const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);
const input = document.getElementById("inputField");
const listTitle = document.getElementById("list-title");
const inputForm = document.getElementById("search-form");
const movieCheckBox = document.getElementById("movie-checkBox");
const tvShowsCheckbox = document.getElementById("tv-shows-checkBox");

const selected = searchParams.get("selected");
const title = searchParams.get("title");

const formValue = {
  selected: selected,
  title: title,
};

input.value = formValue.title;
movieCheckBox.checked = formValue.selected === "movie";
tvShowsCheckbox.checked = formValue.selected === "tv";

function submitForm(e) {
  e.preventDefault();

  if (formValue.selected === null) {
    return;
  }

  formValue.title = input.value;
  listTitle.innerText = `You selected: ${
    formValue.selected === "movie" ? "Movies" : "Tv_Shows"
  }`;

  searchParams.set("selected", formValue.selected);
  searchParams.set("title", formValue.title);
  window.history.replaceState({}, "", `${url.pathname}?${searchParams}`);

  searchOptions(formValue);
}

tvShowsCheckbox.addEventListener("change", () => {
  input.value = "";
  if (tvShowsCheckbox.checked) {
    movieCheckBox.checked = false;
    formValue.movie = false;
    formValue.selected = "tv";
  }
});

movieCheckBox.addEventListener("change", () => {
  input.value = "";
  if (movieCheckBox.checked) {
    tvShowsCheckbox.checked = false;
    formValue.tv_shows = false;
    formValue.selected = "movie";
  }
});

inputForm.addEventListener("submit", submitForm);
document.addEventListener("DOMContentLoaded", submitForm);
