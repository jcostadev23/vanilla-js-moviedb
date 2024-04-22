async function getMoviesAndTvSHows(option) {
  try {
    const resp = await fetch(
      `${config.generalUrl}movie?api_key=${config.api_key}&sort_by=${option}`
    );
    if (!resp.ok) {
      throw new Error("Error on fetching API" + resp.statusText);
    }

    const data = await resp.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMoviesDetails() {
  const movies = await getMoviesAndTvSHows();

  const listDetails = await Promise.all(
    movies.map(async (movie, index) => {
      const url = `${config.movieDetails}${movie.id}?api_key=${config.api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    })
  );

  console.log(
    movies.map((movie, index) => ({ ...movie, xixi: listDetails[index] }))
  );
}

async function getSelectedOptions(options) {
  const url = validateUrl(options);
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
