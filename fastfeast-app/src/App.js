import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from './components/LogInPage';
import RestaurantPage from './components/RestaurantPage';
import MenuPage from './components/MenuPage';
import SignUpPage from './components/SignUpPage';
import UserInfo from './components/UserInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"  >
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/RestaurantPage" element={<RestaurantPage />} />
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;