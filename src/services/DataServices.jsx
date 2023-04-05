import axios from 'axios'

const headerConfig = {
    headers:{
    'x-access-token':localStorage.getItem('token')
    }
};

export const getBooks = async() =>{
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",headerConfig)
    console.log(response)
    return response
    
}