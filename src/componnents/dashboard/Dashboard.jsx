import React,{useState,useEffect} from 'react'
import BookCard from '../bookcard/BookCard'
import Header from '../header/Header'
import './Dashboard.css'
import Footer from '../footer/Footer'
import Grid from "@mui/material/Grid";
import { getBooks } from '../../services/DataServices';
import BookDetails from '../bookdetails/BookDetails';
import Pagination from '@mui/material/Pagination';

function Dashboard() {
  const [book, setbook] = useState([])
  const [toggle, setToggle]= useState(true)
  const [bookData, setBookData] = useState()
  const [numofPages,setNumofPages] = useState(0);
  const [booklimit,setBookLimit] = useState(8);
  const [searchItem, setSearchItem] = useState("");
  const [filterData,setFilterData] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);



  const loaddata = async () => {
      let response = await getBooks()
      console.log(response)
      let arr = response.data.result;
      let num = Math.ceil(response.data.result?.length/8)
      // console.log(num)
      setNumofPages(num)
      setbook(arr.slice(0,booklimit))
  }

  const setPage=async(event,pagenum)=>{
    let response = await getBooks()
      console.log(response)
      let arr = response.data.result;
      setbook(arr.slice(booklimit*(pagenum-1),booklimit*pagenum))
  }

  useEffect(() => {
    loaddata()
  },[])

  //Search Item
  useEffect(() => {
    setFilterData(
      book.filter(
        (bookObject) =>
          bookObject.author.toLowerCase().includes(searchItem.toLowerCase()) ||
          bookObject.bookName.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
    if (searchItem.length !== 0) {
      setFilterToggle(true);
    } else {
      setFilterToggle(false);
      loaddata()
    }
    console.log(filterData);
  }, [searchItem]);


  const bookObjFn = (data)=>{
    setBookData(data)
  }

  return (
    
    <div>


    {
      toggle?<div><Header setSearchItem={setSearchItem}/>
      <div id="dash-main-container">
        <div id="second-row">
          <div id="left-side-book">
          <h3 id='books-text'>Books</h3>
          <h6 id='items128'>({book.length} items)</h6>
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
            filterToggle?
            filterData.map((bookObj)=>(<BookCard key={bookObj._id} setToggle={setToggle} bookObjFn={bookObjFn} bookObj={bookObj}/>))
            :book.map((bookObj)=>(<BookCard key={bookObj._id} setToggle={setToggle} bookObjFn={bookObjFn} bookObj={bookObj}/>))
          }
          </Grid>:
        
        </div>
        
        
          
        
        {/* </div> */}
        <Pagination onChange={setPage} color='primary' style={{margin:'auto'}} count={numofPages} />
        </div>
        
      <Footer/></div>:<BookDetails setToggle={setToggle} bookData={bookData}/>
    }  
      
    </div>
  )
}

export default Dashboard
