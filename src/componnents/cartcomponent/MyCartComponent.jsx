import "./MyCartComponent.css";
import React from "react";
import bookImg from "../../assets/bookimage/Image10.png";
import Grid from "@mui/material/Grid";
import AddToCart from "../addtocart/AddToCart";
import {removeItemCartService} from "../../services/DataServices";

function MyCartComponent({ bookObj, getCartItem }) {
  //On click of remove button it will delete the iteam from cart
  const deleteItem = async () => {
    let response = await removeItemCartService(bookObj._id);
    console.log(response);
    window.location.reload("true")
  };

  return (
    <div className="mycart-main">
      <Grid className="grid-mycart" container spacing={4}>
        <Grid item>
          <img src={bookImg} style={{ width: "70px", height: "90px" }} alt="" />
        </Grid>
        <Grid item>
          <h5 id="mycartcomp-bookname">{bookObj.product_id.bookName}</h5>
          <h6 className="author-mycart">{bookObj.product_id.author}</h6>
          <div className="price-mycart">
            <h4 className="discount-price-mycart">
              Rs.{bookObj.product_id.discountPrice}
            </h4>
            <p className="price-price-mycart">Rs.{bookObj.product_id.price}</p>
          </div>
          <div className="counter-mycart">
            <AddToCart bookObj={bookObj} getCartItem={getCartItem} />
            <button className="remove-btn" onClick={deleteItem}>
            Remove 
            </button>

          </div>
          
        
          {/* <h6 onClick={deleteItem}>Remove </h6> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default MyCartComponent;
