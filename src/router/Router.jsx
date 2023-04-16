import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../componnents/dashboard/Dashboard';
import CartPage from '../pages/mycartpage/CartPage';
import OrderPlaced from '../pages/orderplaced/OrderPlaced';
import LandingPage from '../pages/landingpage/LandingPage';



function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path={"/"} element={<AuthRoute><LandingPage/></AuthRoute>} />
          <Route  path={"/signup"} element={<AuthRoute><SignUp /></AuthRoute>} />
          <Route path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path={"/cart"} element={<ProtectedRoute><CartPage/></ProtectedRoute>} />
          <Route path={"/order-confirmation"} element={<ProtectedRoute><OrderPlaced/></ProtectedRoute>} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router