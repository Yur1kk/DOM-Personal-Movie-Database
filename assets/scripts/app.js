const addMovieModal = document.getElementById('add-modal');
const startMovieButton = document.querySelector('header button');

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
};

startMovieButton.addEventListener('click', toggleMovieModal);