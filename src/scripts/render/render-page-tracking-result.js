/* eslint-disable new-cap */
/* eslint-disable max-len */
import {
  contenReceiptSearchResults,
  contentTrackList,
  nothingInternet,
  nothingNoResi,
  trackList,
} from '../views/templates/template-creator';
import ShowTrackList from '../utils/show-track-list';

const renderTrackingDataResults = (dataTracking, courier) => {
  const contentTrackResult = document.querySelector('#contentTrackResult');
  const historyTrackings = dataTracking.history;

  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += contenReceiptSearchResults(dataTracking, courier);
  contentTrackResult.innerHTML += contentTrackList();

  historyTrackings.forEach((history) => {
    document.querySelector('.track-list__body').innerHTML += trackList(history, historyTrackings);
  });

  const button = document.querySelector('#buttonDetailTrack');
  const content = document.querySelector('.content__track-list');

  ShowTrackList(button, content);
};

const renderErrorTrackingDataResults = () => {
  const contentTrackResult = document.querySelector('#contentTrackResult');
  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += nothingNoResi();
};

const renderNothingInternet = () => {
  const contentTrackResult = document.querySelector('#contentTrackResult');
  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += nothingInternet();
};

export {
  renderTrackingDataResults,
  renderErrorTrackingDataResults,
  renderNothingInternet,
};
