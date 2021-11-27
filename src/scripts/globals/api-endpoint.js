/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  TRACKING: (numberResi, courier) => `${CONFIG.BASE_URL}?api_key=${CONFIG.KEY}&courier=${courier}&awb=${numberResi}`,
};

export default API_ENDPOINT;
