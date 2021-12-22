import Dashboard from '../views/pages/dashboard';
import AboutUs from '../views/pages/about-us';
import HistoryPage from '../views/pages/history';
import HistoryDetail from '../views/pages/history-detail';

const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/history': HistoryPage,
  '/history-detail/:numberResi': HistoryDetail,
  '/about-us': AboutUs,
};

export default routes;
