async function getMoviesAndTvSHows(option) {
  let new_url = `${config.generalMovie}${config.now_playing}?api_key=${config.api_key}`;

  if (option === config.popular) {
    new_url = `${config.generalMovie}${config.popular}?api_key=${config.api_key}`;
  }

  if (option === "tv") {
    new_url = `${config.generalTv}${config.popular}?api_key=${config.api_key}`;
  }

  try {
    const resp = await fetch(new_url);
    if (!resp.ok) {
      throw new Error("Error on fetching API" + resp.statusText);
    }

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getDetails(id, option) {
  const url = `${config.details}${option}/${id}?api_key=${config.api_key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getSelectedOptions() {
  const url = `${config.searchUrl}${global.search.type}?api_key=${config.api_key}&query=${global.search.term}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error on fetching Movies" + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("You get a erro on a fetch options" + error);
  }
}
