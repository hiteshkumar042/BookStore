import React from 'react'
import LandingPage from './pages/landingpage/LandingPage';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Header from './componnents/header/Header';
import Router from './router/Router';
import BookItems from './componnents/bookcard/BookCard';
import Dashboard from './componnents/dashboard/Dashboard';
import BookDetails from './componnents/bookdetails/BookDetails';
import OrderPlaced from './pages/orderplaced/OrderPlaced';
import AddToCart from './componnents/addtocart/AddToCart';
function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      {/* <Header/> */}
      {/* <LogIn/> */}
      <Router/>
      {/* <AddToCart/> */}
      {/* <SignUp/> */}
      {/* <OrderPlaced/> */}
      {/* <BookItems/> */}
      {/* <Dashboard/> */}
      {/* <BookDetails/> */}
    </div>
  );
}

export default App;
