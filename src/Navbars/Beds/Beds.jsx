import { useEffect, useState,useContext } from "react";

import Usercontex from "../../Contex/Createcontex";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

function Beds() {
  const { cart, SetCart, cartCount, setCartCount,proData } =useContext(Usercontex);

  const navigate = useNavigate()

  const [data, setData] = useState([]);



  useEffect(() => {
    function filteritem(itemname) {
      const result = proData.filter((val) => {
        return val.product === itemname;
      });
      setData(result);
      
    }

    filteritem('Bed');
  }, [proData]);


  useEffect(() => {
    setCartCount(cart.length);
  }, [setCartCount,cart]);


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

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
 
  return (
    <>
      <div className="container-fuild fontfam">
        <div className="filterdiv mx-5">
          <ul className="Filteropt">
            <li style={{ padding: "15px" }}>Filter By</li>
            <li className="remain">Color Swatch</li>
            <li className="remain text-dark" onClick={()=>navigate("/")}>Home</li>
            <li className="remain"><span onClick={()=>navigate("/carts")} className="text-danger" >Add to Cart <ShoppingCartIcon className="text-success"/>({cartCount})</span></li>
          </ul>
        </div>
        <h3 className="sofatitle mb-5">Beds</h3>
        <div>
        <div className="col-md-12">
          <div className="row">
            {data.map((value) => {
              const { id, name, image, price } = value;

              return (
                <>
                  <div className="col-md-4 mb-4" key={id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={image}
                        alt={name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{price}</p>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button href="#" className="btn btn-dark"
                         onClick={() => addToCart(value)}
                         onMouseUp={() => setCartCount(cart.length)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        </div>
      </div>

      
    </>
  );
}

export default Beds;
