import Dashboard from '../views/pages/dashboard';
import AboutUs from '../views/pages/about-us';
import  HistoryPage from '../views/pages/history'
import DetailHistory from '../views/pages/detailed-history';

// import { dashboardHistory } from '../views/templates/template-creator';
// import
const routes = {
  '/': Dashboard,
  '/detailedHistory:':AboutUs, 
  '/dashboard': Dashboard,
  '/about-us': AboutUs,
  '/history': HistoryPage,  
  '/about-usa': DetailHistory,
    //   '/upcoming': Upcoming,
    '/detail/:id': DetailHistory,
};

export default routes;
