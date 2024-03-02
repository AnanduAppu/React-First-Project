import { useContext, useState, useEffect } from "react";
import Usercontex from "../../Contex/Createcontex";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Addcart() {
  const { cart, SetCart, totalPrice, log, setCartCount } =
    useContext(Usercontex);

  const Navigate = useNavigate();
  const NavToHome = useNavigate();
  const NavToLog = useNavigate();

  const [inline, setInline] = useState("none");

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
      {/* <div className="container mt-5">
        <h1 className="text-info">Shopping Cart</h1>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={item.id} className="list-group-item">
                  {item.name} - ₹{item.price} - Quantity: {item.quantity} --
                  {
                    <img
                      src={item.image}
                      alt={item.name}
                      width="200px"
                      height="200px"
                    />
                  }
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
              <strong className="text-dark">Total: ₹{calculateTotal()}</strong>
              <button
                className="btn btn-success mt-2 "
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
      </div> */}

      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
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
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>

                        {cart.map((item, index) => (
                          <>
                            <hr className="my-4" />

                            <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                  className="img-fluid rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">Shirt</h6>
                                <h6 className="text-black mb-0">
                                {item.name}
                                </h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2">
                                  <i className="fas fa-minus"></i>
                                </button>

                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value="1"
                                  type="number"
                                  className="form-control form-control-sm"
                                />

                                <button className="btn btn-link px-2">
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">€ 44.00</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i className="fas fa-times"></i>
                                </a>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        {/* Add summary details here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addcart;
