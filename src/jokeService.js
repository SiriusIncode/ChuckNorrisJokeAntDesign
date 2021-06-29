const loadJoke = (done) => {
  fetch("https://api.chucknorris.io/jokes/random/")
    .then((res) => res.json())
    .then((res) => {
      done(res);
    });
};

export default loadJoke;
