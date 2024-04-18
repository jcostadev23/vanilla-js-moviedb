const input = document.getElementById("inputField");
const inputForm = document.getElementById("search-form");
const movieCheckBox = document.getElementById("movie-checkBox");
const tvShowsCheckbox = document.getElementById("tv-shows-checkBox");

const formValue = {};

function submitForm(e) {
  e.preventDefault();

  if (isEmpty(formValue) || formValue.tv_shows) {
    return;
  }

  formValue.title = input.value;
  formValue.selected = formValue.movie ? "movie" : "tv_shows";
  input.value = "";
  tvShowsCheckbox.checked = false;
  movieCheckBox.checked = false;
  searchOptions(formValue);
}

tvShowsCheckbox.addEventListener("change", () => {
  if (tvShowsCheckbox.checked) {
    movieCheckBox.checked = false;
    formValue.movie = false;
    formValue.tv_shows = tvShowsCheckbox.checked;
  }
});

movieCheckBox.addEventListener("change", () => {
  if (movieCheckBox.checked) {
    tvShowsCheckbox.checked = false;
    formValue.tv_shows = false;
    formValue.movie = movieCheckBox.checked;
  }
});

inputForm.addEventListener("submit", submitForm);
