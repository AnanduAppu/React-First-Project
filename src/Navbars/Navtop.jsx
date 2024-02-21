import "./navtop.css"

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Categories from "./categories/Categories";
import ProductItems from "./ProductDetails/ProductItems";
import Footer from "./Footer";
import Usercontex from '../Contex/Createcontex';
import { useContext,useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';

function TopNavbar() {


 const navigate = useNavigate();
  const {setSearch,cartCount} = useContext(Usercontex);
  const [prodNav,setProdNav]= useState(false);
  const {log,setLog} = useContext(Usercontex);
  const [innerText, setInnerText] = useState('sign up');
 
 

console.log(cartCount);

  console.log(log);
  useEffect(() => {
    if (log ==='') {
      setInnerText('sign up');
    }else{
      setInnerText(log);
    }
    
  }, [log]);

  var ImageAlt ="its a image"

  return (
    <>
    <div className='tpBd '>
      <div className="Searchbox">
         <input onClick={()=>setProdNav(!prodNav)} onChange={(evt)=>setSearch(evt.target.value) } className="inputhere" placeholder="Search here"/>
         <span style={{ cursor: 'pointer'}} className="text-primary"><SearchIcon/></span>
      </div>

      <div className="logo">
        <img src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg" alt={ImageAlt}/>
      </div>



      <div className="Account" >
        <Link className="mx-2" to={log===""?"/login":"/"}> <span>hello {innerText} <AccountCircleIcon className="text-warning"/></span></Link>
        <Link className="text-secondary" style={{cursor:"pointer", display: log?"inline":"none"}} onClick={()=>setLog("")}>Logout</Link>
        <span onClick={()=>navigate("/carts")} className="text-danger mx-4" >Add to Cart <ShoppingCartIcon className="text-success"/>({cartCount})</span>
      </div>
      
      
    </div>
        
    <div className="paperfryThings">
      <ul className="Things">
        <li>Sell on Paperfry</li>
        <li>Become a Franchiser</li>
        <li>Buy in Bulk</li>
        <li>Gift Cards</li>
        <li>Get Inspired</li>
        <li>Track Your Order</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="OptionNav">
      <ul className="Options">
        <li>Furnitur</li>
        <li>Sofa & Seatings</li>
        <li>Mattresses</li>
        <li>Home Decor</li>
        <li>Furnishing</li>
        <li>Kitchen & Dining</li>
        <li>Lamps & Lighting</li>
        <li>Home Utility</li>
        <li>Appliances</li>
        <li>Modular</li>
      </ul>
    </div>
  
      
     {prodNav?<ProductItems/>:<Categories/>}




    <Footer />

    </>
  
    
  );
}

export default TopNavbar;





