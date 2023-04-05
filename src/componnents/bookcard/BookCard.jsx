import React from 'react'
import './BookCard.css'
import BookImage from '../../assets/bookimage/Image10.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

function BookCard({bookObj,setToggle,bookObjFn}) {
  return (
    <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3}>
    <Card onClick={()=>{setToggle(false);bookObjFn(bookObj)}} id='card-container-main' style={{width:235}}>
        <div id="book-pic">
            <img src={BookImage} alt="book Item" />
        </div>
      <CardContent id='book-box' >
        <Typography>
          <div id="book-heading">
          {bookObj?.bookName}
          </div>
        </Typography>
        <Typography>
            <div id="book-author">
            {bookObj?.author}
            </div>
        </Typography>
        <Typography>
          <div id="book-rating">
            <div id="rating">4.5 *</div>
            <div id="reviewer">(20)</div>
          </div>
        </Typography>
        <Typography>
            <div id="book-price">
                <div id="actual-price">{bookObj.discountPrice}</div>
                <div id="original-price">{bookObj.price}</div>
            </div>
        </Typography>
      </CardContent>
    </Card>
    
    </Grid>
    
  )
}

export default BookCard
