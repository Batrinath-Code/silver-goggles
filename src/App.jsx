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
// import LandingPage from './pages/LandingPage';
import TimeTable from './pages/TimeTable';
import NotFoundPage from './pages/404Page';
import MainPage from './pages/MainPage';
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
        <Route exact path="/" element={<MainPage />} />
        {/* <Route exact path="/patient/:id" element={<LandingPage />} /> */}
        <Route exact path="/progress/:id" element={<Dashboard />} />
        <Route exact path="/schedule/:id" element={<TimeTable />} />

         {/* Catch-all route for 404 (must be the last route) */}
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
