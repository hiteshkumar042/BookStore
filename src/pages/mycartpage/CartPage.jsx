import "./CartPage.css";
import React from "react";
import Header from "../../componnents/header/Header";
import Box from "@mui/material/Box";
import MyCartComponent from "../../componnents/cartcomponent/MyCartComponent";
import { getCartItemService } from "../../services/DataServices";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';


function CartPage() {
  const [cartItems, setCartItem] = React.useState([]);
  console.log(cartItems)
  
  //get cart items
  const getCartItem = async () => {
    let response = await getCartItemService();
    let cartItem = response.data.result;
    setCartItem(cartItem);
  };
 
  //to get the total book available in cart and Address
  let bookqt=0;
  let addressData = []
  cartItems.map((cartval) =>{
    bookqt = bookqt+cartval.quantityToBuy
    // console.log(bookqt)
    // to get the array of address
     return addressData = cartval.user_id.address
    // console.log(addressData)
  })
  
  const completeaddress = addressData.map((addr) => `${addr.fullAddress}, ${addr.city},${addr.state} `)
  // console.log(completeaddress)
  
  
  React.useEffect(() => {
    getCartItem();
    
  }, []);

  const totalCartQty = bookqt;
  return (
    <div>
      <Header totalCartQty={totalCartQty} />
      <div className="home-cartpage">
      <Link to="/dashboard" className="home-cart">
        <h6 >Home /</h6>
        </Link>
        <h6 className="mycart-cart">My Cart</h6>
        
       
      </div>

      <Box sx={{
         p: 2,
         
          borderRadius: '5px',
         boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)'
          }}
        className="cartpage-boxes"
        style={{width: "56%", margin: "auto" }}
      
      >
        <div className="firstrow-mycart">
          <h5 className="mycart-text">My Cart ({bookqt})</h5>
          <div className="location-mark-title">
          <LocationOnIcon color="#A03037" fontSize="smaller"/>
          <select className="select-location" name="" id="">
          <option className="option-location" value="">Use Current Location</option>
            {
              completeaddress.map((adr)=>(<option key={adr} className="option-location" value="">{adr}</option>))
            }
            
          </select>
          </div>
        </div>
        {cartItems.map((bookObj) => (
          <MyCartComponent
            key={bookObj._id}
            bookObj={bookObj}
            getCartItem={getCartItem}
          />
        ))}
        <div className="place-order-btn">
          <button>Place Order</button>
        </div>
      </Box>
      {/* Address Details */}
      <Box sx={{
         p: 2,

          borderRadius: '5px',
         boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)'
          }}
        className="cartpage-address"
        style={{width: "56%", margin: " 1em auto" }}
      
      >
        Address
      </Box>
      {/* order Summery */}
      {/* <Box sx={{
         p: 2,
         
          borderRadius: '5px',
         boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)'
          }}
        className="cartpage-order-summery"
        style={{width: "56%", margin: " 1em auto" }}
      
      >
        Order Summery
      </Box> */}
    </div>
  );
}

export default CartPage;
