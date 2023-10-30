import "./admin.css";
import image from "./0.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Usercontex from "../Contex/Createcontex";

function AddProdcut() {
  const Navigate = useNavigate();
  const { proData, setProData } = useContext(Usercontex);

  const datadetails = {
    id: "",
    image: "",
    name: "",
    product: "",
    price: "",
  };

  const [editData, setEditData] = useState(datadetails);
  const [err, setErr] = useState({});

  const dataHandler = () => {
    const strPrice=editData.price
    editData.price= +strPrice
    const strId=editData.id
    editData.id = +strId
    proData.push(editData);
    setProData(proData.slice());
  };

  useEffect(() => {
    console.log("edited data changed", editData);
  }, [editData]);

  const getValue = (e) => {
    const { name, value } = e.target;

    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const productAdded = (e) => {
    e.preventDefault();
    const errFind = {};
    if (editData.name === "") {
      errFind.name = "must fill product name";
    }

    if (editData.image === "") {
      errFind.image = "must fill image link";
    }

    if (editData.product === "") {
      errFind.product = "must fill product type";
    }

    if (editData.price === "") {
      errFind.price = "must fill price";
    }

    if (editData.id === "") {
      errFind.id = "must fill ID";
    }

    setErr(errFind);

    if (Object.keys(errFind).length === 0) {
      dataHandler();
      console.log(proData);
      alert("submit successful");
      setEditData(datadetails);
    }
  };
  return (
    <div>
      <nav className="menu">
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={image} alt="no image" />
          <button onClick={() => Navigate("/Admin")}>Anandu</button>
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
          <li className=" ulchid">
            <span className="lispan">Home</span>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div className="Details">
        <nav className="navbar navbar-dark bg-secondary mb-3">
          <Link to="/Admin/products">
            <span className="navbar-brand mb-0 h1 text-whit mx-2 click">
              Prodcuts
            </span>
          </Link>
          <span className="navbar-brand mb-0 h1 text-whit mx-2 click">
            Add+
          </span>
        </nav>
        <div className="container">
          <h2>Add the Product</h2>
          <form onSubmit={(e) => productAdded(e)}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => getValue(e)}
                value={editData.name}
                name="name"
              />
              <p className="text-danger">{err.name}</p>
            </div>
            <div className="form-group my-3">
              <label>Image link</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => getValue(e)}
                value={editData.image}
                name="image"
              />
              <p className="text-danger">{err.image}</p>
            </div>
            <div className="form-group my-3">
              <label>Product Type</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => getValue(e)}
                value={editData.product}
                name="product"
              />
              <p className="text-danger">{err.product}</p>
            </div>
            <div className="form-group my-3">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => getValue(e)}
                value={editData.price}
                name="price"
              />
              <p className="text-danger">{err.price}</p>
            </div>
            <div className="form-group my-3">
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => getValue(e)}
                value={editData.id}
                name="id"
              />
              <p className="text-danger">{err.id}</p>
            </div>
            <button
              type="submit"
              className="btn btn-primary my-2"
              name="create"
            >
              Add +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProdcut;
