/* eslint-disable new-cap */
import API_ENDPOINT from '../globals/api-endpoint';
import {
  renderTrackingDataResults,
  renderErrorTrackingDataResults,
  renderNothingInternet,
} from '../render/render-page-tracking-result';

const TrackingDataResults = async (numberResi, courier) => {
  try {
    const respone = await fetch(API_ENDPOINT.TRACKING(numberResi, courier));
    const responseJson = await respone.json();
    if (responseJson.data) {
      renderTrackingDataResults(responseJson.data, courier);
    } else {
      renderErrorTrackingDataResults(responseJson.status);
    }
  } catch (error) {
    renderNothingInternet(error);
  }
};

export default TrackingDataResults;
