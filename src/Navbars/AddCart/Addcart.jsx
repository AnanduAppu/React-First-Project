import { useContext, useState, useEffect } from "react";
import Usercontex from "../../Contex/Createcontex";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "../Footer";

function Addcart() {
  const { cart, SetCart, totalPrice, log, setCartCount } =
    useContext(Usercontex);

  const Navigate = useNavigate();
  const NavToHome = useNavigate();
  const NavToLog = useNavigate();

  const [inline, setInline] = useState("none");

  const [ value,setValue] = useState(cart.length)
  useEffect(() => {
    setCartCount(cart.length);
  }, [setCartCount, cart]);

 

  const clickBuy = () => {
    setInline("inline");
    alert("You have to login");
  };
  console.log(inline);

  const calculateTotal = () => {
    const total = cart
      .reduce((total, product) => total + product.quantity * product.price, 0)
      .toFixed(2);
    totalPrice(total);
    
    return total;
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    console.log(existingProduct);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      SetCart(updatedCart);
      setValue(value+1)
      console.log(updatedCart);
    } else {
      SetCart([...cart, { ...product, quantity: 1 }]);
      setValue(value+1)
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      SetCart(updatedCart);
      setValue(value-1)
    } else {
      SetCart(cart.filter((item) => item.id !== product.id));
      setValue(value-1)
    }
  };

  return (
    <div className="mh-100 bg-white">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mx-5" onClick={() => NavToHome("/")}>
          <img
            src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg"
            alt="logo"
            width="50%"
          />
        </span>
        <form className="form-inline">
          <button
            className="btn btn-outline-success my-2 mx-5 my-sm-0"
            style={{ display: inline }}
            onClick={() => NavToLog("/login")}
          >
            <AccountCircleIcon />
          </button>
        </form>
      </nav>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ display: "inline-block", fontWeight: "bold" }}>Addcart</h1>
      </div>


      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "white" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                        </div>

                        {cart.map((item, index) => (
                          <>
                            <hr className="my-4" />

                            <div
                              key={index}
                              className="row mb-4 d-flex justify-content-between align-items-center"
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={item.image} alt={item.name} />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{item.product}</h6>
                                <h6 className="text-black mb-0">{item.name}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  onClick={() => removeFromCart(item)}
                                  className="btn display-5 px-2 py-2 border border-secondary"
                                >
                                  -
                                </button>
                                <label className="display-6">
                                  {item.quantity}
                                </label>

                                <button
                                  onClick={() => addToCart(item)}
                                  className="btn  display-5  px-2 py-2 border border-secondary"
                                >
                                  +
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">₹{item.price}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end"></div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">{value}</h5>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>₹{calculateTotal()}</h5>
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                          onClick={() =>
                            log.length === 0
                              ? clickBuy()
                              : cart.length === 0
                              ? alert("Add something to cart")
                              : Navigate("/carts/payment")
                          }
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Addcart;
