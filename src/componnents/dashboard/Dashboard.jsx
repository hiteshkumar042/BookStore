import React from 'react'
import BookCard from '../bookcard/BookCard'
import Header from '../header/Header'
import './Dashboard.css'
import Footer from '../footer/Footer'
import Grid from "@mui/material/Grid";
import { getBooks } from '../../services/DataServices';
import BookDetails from '../bookdetails/BookDetails'

function Dashboard() {
  const [book, setbook] = React.useState([])
  const [toggle, setToggle]= React.useState(true)
  const [bookData, setBookData] = React.useState()
  const loaddata = async () => {
      let response = await getBooks()
      console.log(response)
      let arr = response.data.result
      setbook(arr)
  }
  React.useEffect(() => {
    loaddata()
  },[])

  const bookObjFn = (data)=>{
    setBookData(data)
  }

  return (
    
    <div>


    {
      toggle?<div><Header/>
      <div id="dash-main-container">
        <div id="second-row">
          <div id="left-side-book">
          <h3 id='books-text'>Books</h3>
          <h6 id='items128'>(128 items)</h6>
          </div>
          <div id="right-side-book">
            <select name="" id="">
              <option value="">Sort by relavent</option>
            </select>
          </div>
        </div>
        <div id="grid-dashboard">
        
          <Grid  container spacing={4}>
          {
            book.map((bookObj)=>(<BookCard setToggle={setToggle} bookObjFn={bookObjFn} bookObj={bookObj}/>))
          }
          </Grid>:
        
        </div>
        
        
          
        
        {/* </div> */}
        </div>
      <Footer/></div>:<BookDetails setToggle={setToggle} bookData={bookData}/>
    }  
      
    </div>
  )
}

export default Dashboard
