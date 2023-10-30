import "./admin.css";
import image from "./0.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Usercontex from "../Contex/Createcontex";


function User() {

  const {userData} = useContext(Usercontex);
  const navi = useNavigate();
  var slnum = 1
                  

  return (
    <div>
      <nav className="menu">
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src={image} alt="no image" />
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
      <div className="Details">
        <h1 style={{textAlign:"center"}}>User Details</h1>
        <div className="container mt-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="col-sm-1">Serial Number</th>
                <th className="col-lg-6">Email</th>
                <th className="col-lg-5">Name</th>
              </tr>
            </thead>
            <tbody>
              
                {userData.map((val)=>{
                  const {userName,email}=val;
                 
                  return (
                    <tr>
                    <td>{slnum++}</td>
                    <td>{email}</td>
                    <td>{userName}</td>
                    </tr>

                  )

                })}
                
              
    
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
