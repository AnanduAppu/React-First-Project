import Registration from "./login&Registration/Registration";
import Login from "./login&Registration/Login";
import Navtop from "./Navbars/Navtop";
import { useState } from "react";
import Usercontex from "./Contex/Createcontex";
import {Routes,Route} from 'react-router-dom';
import Beds from "./Navbars/Beds/Beds";
import Sofa from "./Navbars/Sofa/Sofa";
import Addcart from "./Navbars/AddCart/Addcart";
import PaymentPage from "./Navbars/AddCart/paymentPage";
import Main from "./AdminPannel/Admin";
import Items from "./AdminPannel/Items";
import Users from "./AdminPannel/Users";
import Products from "./ProductData";
import AddProdcut from "./AdminPannel/AddProdcut";
import EditProduct from "./AdminPannel/EditProduct";
import UsersData from "./userData";
import AdminData from "./AdminData";
import Adminlog from "./login&Registration/Adminlog";
import Thanku from "./Navbars/AddCart/Thanku";


function App() {
  const [proData,setProData]=useState(Products )
  const [log,setLog] = useState("");
  const [search,setSearch] = useState('');
  const [userData, setUserData] = useState(UsersData);
  const [cart,SetCart]=useState([]);
  const [cartCount, setCartCount]=useState(null);
  const [Price,totalPrice] = useState(null)
  const [index,setIndex] = useState(null)
  const [adminData,setAdminData] = useState(AdminData)
  
  const data ={
    userData, setUserData,
    log,setLog,
    search,setSearch,
    cart,SetCart,
    cartCount, setCartCount,
    Price,totalPrice,
    proData,setProData,
    index,setIndex,
    adminData,setAdminData
    
  };


  
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      
      <Usercontex.Provider value={data}>
   
      <Routes>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminLog" element={<Adminlog/>}/>
        <Route path="/" element={<Navtop/>}/>
        <Route path="/beds" element={<Beds/>}/>
        <Route path="/sofas" element={<Sofa/>}/>
        <Route path="/carts" element={<Addcart/>} />
        <Route path="/carts/payment" element={<PaymentPage/>}/>
        <Route path="/carts/payment/thanks" element={<Thanku/>}/>
        <Route path="/Admin" element={<Main/>}/>
            <Route path="/Admin/products"element={<Items/>}/>
              <Route path="/addProduct" element={<AddProdcut/>}/>
              <Route path="/editProduct" element={<EditProduct/>}/>
            <Route/>
            <Route path="/Admin/users"element={<Users/>}/>
        <Route/>
     
      </Routes>
      </Usercontex.Provider>
    
    </div>
  );
}

export default App;
