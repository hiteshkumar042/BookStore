import React from 'react'
import './OrderSummery.css'
import BookImage from '../../assets/bookimage/Image10.png'
import Grid from "@mui/material/Grid";


function OrderSummery({bookObj}) {
    console.log(bookObj)

    


  return (
    <div>
       
      <Grid className="grid-summery-main" container spacing={4}>
        <Grid item>
          <img src={BookImage} style={{ width: "70px", height: "90px" }} alt="" />
        </Grid>
        <Grid item>
          <h5 id="summery-bookname">{bookObj.product_id.bookName}</h5>
          <h6 className="summery-author">{bookObj.product_id.author}</h6>
          <div className="summery-price-main">
            <h4 className="summery-discount-price">
            Rs.{bookObj.product_id.discountPrice}
            </h4>
            <p className="summery-price-price">Rs.{bookObj.product_id.price}</p>
          </div>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default OrderSummery
