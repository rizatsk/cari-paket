/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';
import {
  contenReceiptSearchResults,
  contentTrackList,
  nothingInternet,
  nothingNoResi,
  trackList,
} from '../views/templates/template-creator';
import ShowTrackList from '../utils/show-track-list';

const TrackingDataResults = async (numberResi, courier) => {
  try {
    const respone = await fetch(API_ENDPOINT.TRACKING(numberResi, courier));
    const responseJson = await respone.json();
    try {
      if (responseJson.data) {
        renderTrackingDataResults(responseJson.data, courier);
      } else {
        renderErrorTrackingDataResults(responseJson.status);
      }
    } catch (error) {
      renderErrorTrackingDataResults(error);
    }
  } catch (error) {
    renderNothingInternet(error);
  }
};


const renderTrackingDataResults = (dataTracking, courier) => {
  const contentTrackResult = document.querySelector('#contentTrackResult');
  const historyTrackings = dataTracking.history;

  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += contenReceiptSearchResults(dataTracking, courier);
  contentTrackResult.innerHTML += contentTrackList();

  historyTrackings.forEach((history) => {
    document.querySelector('.track-list__body').innerHTML += trackList(history);
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

export default TrackingDataResults;
