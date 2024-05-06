import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import RestaurantPage from './components/RestaurantPage';
import MenuPage from './components/MenuPage';
{/*import RestaurantPage from './components/RestaurantPage';*/}
{/*import TrackOrderPage from './components/TrackOrderPage';*/}

function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0 }}>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RestaurantPage" element={<RestaurantPage />} />
          <Route path="/MenuPage" element={<MenuPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;