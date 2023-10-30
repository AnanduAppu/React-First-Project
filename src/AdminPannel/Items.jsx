import "./admin.css";
import image from "./0.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Usercontex from "../Contex/Createcontex";

function Items() {
  const { proData, setProData, index, setIndex } = useContext(Usercontex);
  const Navigate = useNavigate();
  const NavigateEdit = useNavigate();

  const [type,setType] = useState("")

  const [data,setData]=useState(proData)
  


  function filteritem(itemname){

    const result = data.filter((val)=>{
        return itemname ===""?val:val.product === itemname;
    })
        setProData(result);

      
        
  }
  useEffect(()=>{filteritem(type)},[type])
 

  const indexCatch = (e, val) => {
    const indexNum = proData.indexOf(val);
    console.log(indexNum);
    setIndex(indexNum);
    NavigateEdit("/editProduct");
  };

  const deleteItem = (e, val) => {
    e.preventDefault();
    const filData = proData.filter((ele) => {
      return ele != val;
    });

    console.log(filData);
    setProData(filData);



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
          <Link to="/">
            {" "}
            <li className="ulchid">
              <span className="lispan">Home</span>
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
      <div className="Details">
        <nav className="navbar navbar-dark bg-secondary mb-3">
          <span className="navbar-brand mb-0 h1 text-whit mx-2">Prodcuts</span>
          <Link to={"/addProduct"}>
            <span className="navbar-brand mb-0 h1 text-whit mx-2 click">
              Add+
            </span>
          </Link>
        </nav>
        <Outlet />
        <button type="button" class="btn btn-secondary mx-2 my-2" onClick={(e)=>setType("sofa")}>
          Sofa's
        </button>
        <button type="button" class="btn btn-secondary my-2" onClick={(e)=>setType("Bed")}>
          Beds
        </button>
        <button type="button" class="btn btn-secondary my-2 mx-2" onClick={(e)=>setType("")}>
          All Product
        </button>
        <div className="Container-fluid mx-2 bg-white">
          <div className="col-md-12">
            <div className="row">
              {proData.map((value) => {
                const { id, product, name, image, price } = value;

                return (
                  <>
                    <div className="col-md-4 mb-4" key={id}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={image}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                          <p>{price}</p>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button
                            className="btn btn-dark"
                            onClick={(e) => indexCatch(e, value)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-dark "
                            style={{ marginLeft: "40px" }}
                            onClick={(e) => deleteItem(e, value)}
                          >
                            Delete
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
    </div>
  );
}

export default Items;
