import Header from '../header/Header'
import './BookDetails.css'
import React from 'react'
import Grid from '@mui/material/Grid';
import Bookimage from '../../assets/bookimage/image10@2x.png'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

function BookDetails({setToggle,bookData}) {
  console.log(bookData)
  return (
    <div>
      <Header/>
      <div className="bookdetails-navigation-container">
      <div className="bookdetails-navigation-path">
        <h6 style={{cursor:'pointer'}} className='bookdetails-home' onClick={()=>setToggle(true)} >Home /</h6>
        <h6 className='bookdetails-booktitle'>{bookData.bookName}</h6>
      </div>
      </div>
      <div className="bookdetails-grid-main">
      <Grid className='bookdetails-grid' container direction='row'>
            <Grid item container direction='column' lg={4}>
                <Grid item><div className="book-details-poster">
                <img src={Bookimage} alt="Book Image" />
                </div>
                </Grid>
                    
                <Grid id='addbag-waitlist' container direction='row'>
                    <div id="addtobag">ADD TO BAG </div>
                    <div id="wishlist">WISHLIST </div>
                </Grid>

            </Grid>
            <Grid id='bookdetails-desc' item container direction='column' lg={8} xs={12}>
                <h3 style={{fontSize:'1.5em',textTransform:"capitalize"}}>{bookData.bookName}</h3>
                <p className='bookdetails-author' >{bookData.author}</p>
                <div id="bookdetails-rating-box">
                    <div id="book-details-rating">4.5 *</div>
                     <div id="book-details-reviewer">(20)</div>
                </div>
                <div id="bookdetails-price-box">
                    <div id="bookdetails-actual-price">Rs. {bookData.discountPrice}</div>
                    <div id="bookdetails-original-price">Rs. {bookData.price}</div>
                 </div>
                <hr />
                <div className="bookdetails-summery">
                    <li style={{color:"#878787"}}>Book Details</li>
                    <p style={{color:"#373434",paddingTop:"0.3em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laudantium. </p>
                </div>
                <hr />
                <h3 style={{margin:"0.5em 0 0.5em 0"}}>Customer Feedback</h3>
                <div style={{backgroundColor:"#F5F5F5",padding:"0.8em  0 0.8em 0.8em"}} id="feedback-container">
                    <p>Overall rating</p>
                    <div className="stars-container">
                    <GradeOutlinedIcon/>
                    <GradeOutlinedIcon/>
                    <GradeOutlinedIcon/>
                    <GradeOutlinedIcon/>
                    <GradeOutlinedIcon/>
                    </div>
                    <textarea name="" id="" cols="60" rows="5"></textarea>
                    <div className="submit-feedback">
                    <button>Submit</button>
                    </div>
                    
                </div>
                

            </Grid>
      </Grid>
      </div>
      
    </div>
  )
}

export default BookDetails;
