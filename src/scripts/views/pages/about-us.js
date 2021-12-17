import {cardTeam, pageAboutUs} from '../templates/template-creator';
import dataTeam from '../../data/data-team.json';

const AboutUs = {
  async render() {
    return pageAboutUs();
  },

  async afterRender() {
    const colContentTeam = document.querySelector('.aboutus__content__team');
    colContentTeam.innerHTML = '';
    dataTeam.teams.forEach((team) => {
      colContentTeam.innerHTML += cardTeam(team);
    });
  },
};

export default AboutUs;
