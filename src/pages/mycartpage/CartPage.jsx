import "./CartPage.css";
import React from "react";
import Header from "../../componnents/header/Header";
import Box from "@mui/material/Box";
import MyCartComponent from "../../componnents/cartcomponent/MyCartComponent";
import { getCartItemService,AddOrderService } from "../../services/DataServices";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddressDetails from "../../componnents/addressdetails/AddressDetails";
import OrderSummery from "../../componnents/ordersummery/OrderSummery";


function CartPage() {
  const [cartItems, setCartItem] = React.useState([]);
  const [toggle,setToggle] = React.useState({mycart:false,addressDetails:false,orderSumm:false});
  
  // console.log(cartItems)

  //getting cart items
  const getCartItem = async () => {
    let response = await getCartItemService();
    let cartItem = response.data.result;
    //Strong cart items in cartItems Array/collection
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
  
  //On Load it will run useEffect to get the cart Items
  React.useEffect(() => {
    getCartItem();
    
  }, []);
  
  //Strong cart item quantity in TotalcartQty
  const totalCartQty = bookqt;

  const checkout = async()=>{
    let arrayForHittingServer = cartItems.map((cartObj) => ({
      "product_id": cartObj.product_id._id,
      "product_name": cartObj.product_id.bookName,
      "product_quantity": cartObj.quantityToBuy,
      "product_price": cartObj.product_id.discountPrice
    }))
    let data = { orders: arrayForHittingServer }
        let response = await AddOrderService(data)
        console.log(response)
        if (response.status === 200) {
          window.location.href = '/order-confirmation';
        }
        
  }


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
         {
            toggle.mycart?"":(<button onClick={()=>setToggle({mycart:true,addressDetails:true})} >Place Order</button>)
         } 
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
        {
          toggle.addressDetails? <AddressDetails setToggle={setToggle}/>:(<div>Customer Details</div>)
        }  
       </Box>
      
      {/* order Summery */}

      {
        toggle.orderSumm?<Box sx={{
          p: 2,
          borderRadius: '5px',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)'
           }}
         className="cartpage-order-summery"
         style={{width: "56%", margin: " 1em auto" }}
       
       >
          <div id="details-address">
            <h4>Order Summery</h4>
        <button className='add-new-add'> Add New Address</button>
      </div>
         
        {
              cartItems.map((bookObj) =><OrderSummery key={bookObj._id} bookObj={bookObj}/>)
        }
         
         <div className="order-summery-btn">
        {/* <Link to="./order-confirmation"> */}
         <button onClick={checkout} >CHECKOUT</button>
         {/* </Link> */}
          
        </div>
         
 
         
       </Box>:<Box sx={{
          p: 2,
          borderRadius: '5px',
          boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)'
           }}
         className="cartpage-order-summery"
         style={{width: "56%", margin: " 1em auto" }}
       
       >
         <div>Order Summery</div>
         
       </Box>
      }
      
    </div>
  );
}

export default CartPage;
