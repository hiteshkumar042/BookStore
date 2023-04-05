import Footer from "../../componnents/footer/Footer";
import Header from "../../componnents/header/Header";
import OrderPlacedImg from "../../assets/orderplaced.png";
import Button from '@mui/material/Button';
import "./OrderPlaced.css";

import React from "react";

function OrderPlaced() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ height: "79.8vh" }} className="main-order-placed">
        <div className="order-placed-img">
          <img src={OrderPlacedImg} alt="" />
        </div>
        <div className="order-id-box">
          Hurray!!! Your order is confirmed.
          <br /> The Order is #123456 save the order id for <br /> further
          communication
        </div>
        <div className="table-main">
          <thead>
            <tr>
              <td>Email Us</td>
              <td>Contact Us</td>
              <td>Address</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin@bookstore.com</td>
              <td>+91 8163475881</td>
              <td>
                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near
                Kumarakom restaurant, HSR Layout, Bangalore 560034
              </td>
            </tr>
          </tbody>
        </div>
        <div className="shopping-btn">
          <Button variant="contained" disableElevation>
            Continue Shopping
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPlaced;
