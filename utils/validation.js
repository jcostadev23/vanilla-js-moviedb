function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function validateUrl(options) {
  if (options.title) {
    return `${config.searchUrl}${options.selected}?query=${options.title}&api_key=${config.api_key}`;
  }
  return `${config.generalUrl}${options.selected}?api_key=${config.api_key}`;
}
