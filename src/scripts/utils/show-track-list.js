const ShowTrackList = (button, content) => {
  button.addEventListener('click', () => {
    content.classList.toggle('hidden');
    button.classList.toggle('active');
  });
};

export default ShowTrackList;
