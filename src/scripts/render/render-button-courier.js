import {buttonDeliveryService} from '../views/templates/template-creator';

const RenderButtonCourier = (dataCourier, colButtonDeliveryService) => {
  dataCourier.courier.forEach((data) => {
    colButtonDeliveryService.innerHTML += buttonDeliveryService(data);
  });
};

export default RenderButtonCourier;
