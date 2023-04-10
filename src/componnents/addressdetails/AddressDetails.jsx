import React from 'react'
import './AddressDetails.css'
import TextField from '@mui/material/TextField';
import { AddressItemCartService } from '../../services/DataServices';

function AddressDetails({setToggle}) {
  const [address, setAddress] = React.useState({
    "addressType": "Home",
    "fullAddress": "",
    "city": "",
    "state": ""
  })
  
  //on click of submit it will update the address
  const submit=async()=>{
    let response = await AddressItemCartService(address)
    console.log(response)
    alert("Adress Saved Succesfully")
  }
   

  return (
    <div>
      <div id="details-address">
        <h4>Customer Details</h4>
        <button className='add-new-add'> Add New Address</button>
      </div>
      <div className="address-form-box">
      <div className="second-row-add">
      <div className="fullName-add">
      <TextField size='small' fullWidth label="Full Name" id="fullWidth" />
      </div>
      <div className="mobile-add">
      <TextField size='small' fullWidth label="Mobile Number" id="fullWidth" />
      </div>
      </div>
       
      <div className="addres-add">
      <TextField onChange={(event)=>setAddress((prev)=>({...prev,fullAddress:event.target.value}))}  multiline rows={3} size='small' fullWidth label="Address" id="fullWidth" />
      </div>
      <div className="fourth-row-add">
      <div className="citytown-add">
      <TextField onChange={(event)=>setAddress((prev)=>({...prev,city:event.target.value}))} size='small' fullWidth id="fullWidth" label="City/town" />
      </div>
      <div className="state-add">
      <TextField onChange={(event)=>setAddress((prev)=>({...prev,state:event.target.value}))} size='small' fullWidth id="fullWidth" label="State" variant="outlined" />
      </div>
      </div>

      </div>
    <div className="address-type-box">
        <p className='type-add'>Type</p>
        <div className="radio-address-select">
        <div className="home-radio radio-s">
            <input type="radio" name="addresstype" id=""/>
             <label htmlFor="">Home</label>
        </div>
           <div className="work-radio radio-s">
           <input type="radio" name="addresstype" id=""/>
             <label htmlFor="">Work</label>
             
           </div>
           <div className="other-radio radio-s">
           <input type="radio" name="addresstype" id=""/>
             <label htmlFor="">Other</label>
             
           </div>
            
        </div>
    </div>
    <div className="continue-order-btn">
          <button onClick={()=>{setToggle({orderSumm:true,addressDetails:false});submit()}}>Continue</button>
        </div>
      
              
    </div>
  )
}

export default AddressDetails
