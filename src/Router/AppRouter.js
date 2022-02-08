import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import Landing from '../components/Landing/Landing';
import Test from './Test';




const AppRouter = () => {
  return(
  <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
  </Router>
  );
}

export default AppRouter;
