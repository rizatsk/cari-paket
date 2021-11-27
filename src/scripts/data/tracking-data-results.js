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

const contentTrackResult = document.querySelector('#contentTrackResult');

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
  const historyTrackings = dataTracking.history;

  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += contenReceiptSearchResults(dataTracking, courier);
  contentTrackResult.innerHTML += contentTrackList();

  historyTrackings.forEach((history) => {
    document.querySelector('.track-list__body').innerHTML += trackList(history);
  });
};

const renderErrorTrackingDataResults = () => {
  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += nothingNoResi();
};

const renderNothingInternet = () => {
  contentTrackResult.innerHTML = '';
  contentTrackResult.innerHTML += nothingInternet();
};

export default TrackingDataResults;