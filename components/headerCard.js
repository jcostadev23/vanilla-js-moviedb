function headerCard(imgUrl, score) {
  const div = document.createElement('div');
  div.classList.add('swiper-slide');

  div.appendChild(image(imgUrl));
  div.appendChild(scoreAverage(score));
  return div;
}

function image(imgUrl) {
  const picBaseUrl = 'https://image.tmdb.org/t/p/w300/';
  const img = document.createElement('img');
  img.classList.add('img-swiper');
  img.src = picBaseUrl + imgUrl;

  return img;
}

function scoreAverage(score) {
  const div = document.createElement('div');
  div.classList.add('average-score');
  div.appendChild(star());
  div.appendChild(scoreSpan(score));

  return div;
}

function scoreSpan(score) {
  const span = document.createElement('span');
  span.classList.add('score-average');
  span.textContent = `${score.toFixed(1)} / 10`;

  return span;
}

function star() {
  const star = document.createElement('span');
  star.classList.add('estrela');
  star.textContent = '\u2605';

  return star;
}
