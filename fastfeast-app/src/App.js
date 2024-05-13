import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from './components/LogInPage';
import RestaurantPage from './components/RestaurantPage';
import MenuPage from './components/MenuPage';
import SignUpPage from './components/SignUpPage';
import UserInfo from './components/UserInfo';
import CheckoutPage from './components/CheckoutPage';
import CartPage from './components/cartPage';
import OrderStatus from './components/OrderStatus';
import RateOrder from './components/RateOrder';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App"  >
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/RestaurantPage" element={<RestaurantPage />} />
          <Route path="/menuPage" element={<MenuPage />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/cartPage" component={CartPage} />
          <Route path="/OrderStatus" element={<OrderStatus/>} />
          <Route path="/RateOrder" element={<RateOrder/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;