import Dashboard from '../views/pages/dashboard';
import HistoryPage from '../views/pages/History';
import DetailHistory from '../views/pages/detailHistory';
const routes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/history' : HistoryPage,
  '/detailHistory/:awb' : HistoryPage,
};

export default routes;