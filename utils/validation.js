function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function validateUrl(options) {
  if (options.title) {
    return `${config.searchUrl}${options.selected}?query=${
      options.title
    }&api_key=${config.api_key}&page=${options.page ?? 1}`;
  }
  return `${config.generalUrl}${options.selected}?api_key=${
    config.api_key
  }&page=${options.page ?? 1}`;
}

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);

  return `${day}/${month}/${year}`;
}
