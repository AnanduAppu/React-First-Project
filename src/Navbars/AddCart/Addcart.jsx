import { useContext,useState,useEffect} from 'react';
import Usercontex from '../../Contex/Createcontex';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Addcart() {
    const {cart,SetCart,totalPrice,log,setCartCount}= useContext(Usercontex);
      
  
    const Navigate =  useNavigate ()
    const NavToHome =  useNavigate ()
    const NavToLog =  useNavigate ()

    const [inline,setInline] = useState("none")
  
    useEffect(() => {
      setCartCount(cart.length);
    }, [setCartCount,cart]);
  


    const clickBuy = ()=>{
      setInline("inline")
      alert("You have to login")
    }
    console.log(inline);


    

    const calculateTotal = () => {
      const total = cart.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
      totalPrice(total)
      return total
    };



    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);

      console.log(existingProduct);
  
      if (existingProduct) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        SetCart(updatedCart);
        console.log(updatedCart);
      } else {
        SetCart([...cart, { ...product, quantity: 1 }]);
      }
    };


    const removeFromCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct && existingProduct.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        SetCart(updatedCart);
      } else {
        SetCart(cart.filter((item) => item.id !== product.id));
      }
    };
  
  
  return (
    <div className='mh-100 bg-white'>
      <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mx-5"  onClick={()=>NavToHome("/")}>
          <img src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg" alt='logo' width="50%"/></span>
          <form className="form-inline">
          <button className="btn btn-outline-success my-2 mx-5 my-sm-0" style={{display:inline}} onClick={()=>NavToLog("/login")}><AccountCircleIcon/></button>  
          </form>
      </nav>
      <div style={{textAlign:"center"}}><h1 style={{display:"inline-block",fontWeight:"bold"}}>Addcart</h1></div>
      <div className="container mt-5">
      <h1 className='text-info'>Shopping Cart</h1>
      <div className="row">
        
        <div className="col-md-12">
   
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={item.id} className="list-group-item">
                {item.name} - ₹{item.price} - Quantity: {item.quantity} --
                {<img src={item.image} alt={item.name} width="200px" height="200px"/>}

                <button
                  onClick={() => removeFromCart(item)}
                  className="btn btn-warning float-right ml-2"
                >
                  -
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="btn btn-success float-right"
                >
                  +
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <strong className='text-dark'>Total: ₹{calculateTotal()}</strong>
            <button
              className="btn btn-success mt-2 "
              onClick={()=>log.length===0? clickBuy():cart.length===0?alert("Add something to cart"):Navigate("/carts/payment")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Addcart