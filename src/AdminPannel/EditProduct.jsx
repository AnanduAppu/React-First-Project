import React from "react";
import "./admin.css";
import Myimage from "./0.jpg";
import { useState, useContext, useEffect } from "react";
import Usercontex from "../Contex/Createcontex";
import { Link, Outlet, useNavigate } from "react-router-dom";

function EditProduct() {
  const imageStyle = {
    filter: "brightness(50%)",
  };
  const { proData, index } = useContext(Usercontex);
  const [ProDetails, setProdetails] = useState({});

  console.log(index);

  const productKey={
    id: index+1,
    product: "",
    name: "",
    image: "",
    price: "",
  }
  const [demiDetails,setDemiDetails]=useState(productKey)
 
  const imagedtails = "its an image"

  useEffect(() => {
    if (index >= 0) {
      const value = proData[index];
      setProdetails(value);
    }
  }, [index,setProdetails,proData]);

  const getValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDemiDetails({
      ...demiDetails,
      [name]: value,
    });
    
  };

  const navi = useNavigate();

  const productEdited = (e)=>{
    e.preventDefault();
        console.log(demiDetails);
        const strprice=demiDetails.price
        demiDetails.price= +strprice
        proData[index]= demiDetails;
  }

  return (
    <div>
      <nav className="menu">
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={Myimage} alt={imagedtails} />
          <button onClick={() => navi("/Admin")}>Anandu</button>
        </header>
        <ul className="ultag">
          <Link to="/Admin/users">
            {" "}
            <li className=" ulchid">
              <span className="lispan">Users</span>
            </li>
          </Link>
          <Link to="/Admin/products">
            <li className=" ulchid">
              Products<span className="lispan"></span>
            </li>
          </Link>
          <Link to="/">
            {" "}
            <li className="ulchid">
              <span className="lispan">Home</span>
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
      <div
        className="Details"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card" style={{ width: "22rem" }}>
          <div className="card bg-dark text-white">
            <img
              className="card-img-top"
              src={ProDetails.image}
              alt={imagedtails}
              width="200px"
              height="400px"
              style={imageStyle}
            />
            <div className="card-img-overlay">
              <h5 className="card-title">Edit Details</h5>
              <p className="card-text">Name: {ProDetails.name}</p>
              <br />
              <p className="card-text">Price: ₹{ProDetails.price}</p>
              <br />
              <p className="card-text"> Product Type: {ProDetails.product}</p>
              <br />
              <p className="card-text"> Product ID: {ProDetails.id}</p>
            </div>
          </div>
          <form onSubmit={(e) => productEdited(e)}>
            <div className="card-body">
              <input
                className="form-control"
                type="text"
                placeholder="Product Name"
                value={demiDetails.name}
                name="name"
                onChange={(e) => getValue(e)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Image Link"
                value={demiDetails.image}
                name="image"
                onChange={(e) => getValue(e)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Product type"
                value={demiDetails.product}
                name="product"
                onChange={(e) => getValue(e)}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Price"
                value={demiDetails.price}
                name="price"
                onChange={(e) => getValue(e)}
              />
         
              <button>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
