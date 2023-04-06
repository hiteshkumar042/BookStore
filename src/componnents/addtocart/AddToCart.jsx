import React from 'react'
import './AddToCart.css'
import { modifyCartItemService, removeItemCartService ,getCartItemService} from "../../services/DataServices";

function AddToCart({setAddToBag,getCartItem,bookObj}) {
  console.log(bookObj);

  const deleteItem = async() => {
    let response = await removeItemCartService(bookObj._id)
    setAddToBag(true)
    console.log(response)
  }

  const CheckQty = async(param) => {
    let qty
    if(param === 'add') {
      qty = {
        quantityToBuy: bookObj.quantityToBuy + 1,
      };

    }else {

      if(bookObj.quantityToBuy == 1){
        deleteItem()
      }else{
        qty = {
          quantityToBuy: bookObj.quantityToBuy - 1,
        };
      }
      
     
    }
   
    let response = await modifyCartItemService(bookObj._id,qty)
    console.log(response)
    getCartItem()  
  };

  return (
    <div className="add-to-counter">
      <button onClick={()=>CheckQty('dec')} className="decrement" style={{borderRadius:'100px',marginRight:'10px',width:'2.2rem',border:'1px solid #d2cbcb'}}>-</button>
      <div className="counter-val" style={{border:'1px solid #d2cbcb'}}>{bookObj.quantityToBuy}</div>
      <button onClick={()=>CheckQty('add')} style={{borderRadius:'100px',marginLeft:'10px',width:'2.2rem',border:'1px solid #d2cbcb'}}>+</button>
</div> 
  )
}

export default AddToCart
