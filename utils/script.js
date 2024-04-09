async function getMovies() {
  try {
    const resp = await fetch(config.moviesUrl + config.api_key);
    if (!resp.ok) {
      throw new Error('Error on fetching Movies' + resp.statusText);
    }

    const data = await resp.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMoviesDetails() {
  const movies = await getMovies();

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
