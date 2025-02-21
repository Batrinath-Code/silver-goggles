import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import TimeTable from './pages/TimeTable';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/patient/:id" element={<LandingPage />} />
        <Route exact path="/viewprogress" element={<Dashboard />} />
        <Route exact path="/viewschedule" element={<TimeTable />} />
      </Routes>
    </>
  );
}

export default App;
