const ShowTrackList = (button, content) => {
  button.addEventListener('click', (event) => {
    content.classList.toggle('hidden');
    button.classList.toggle('active');
  });
};

export default ShowTrackList;
