import React from 'react'
import { useState,useContext } from 'react';
import Usercontex from '../Contex/Createcontex';
import { Link,useNavigate  } from 'react-router-dom';
import verticalFurniture from '../spacejoy-IH7wPsjwomc-unsplash.jpg'
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function Login() {


  const Navigate = useNavigate()
  const {userData} = useContext(Usercontex);
  const {setLog} = useContext(Usercontex);

  console.log(userData);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in both username and password fields.');
      return;
    }

    // Check if the entered username and password match any userdetails
    const user = userData.find(user => user.userName === username && user.password === password);

    if (user) {
      alert('Login successful');
      setLog(user.userName);
     
      Navigate("/")
    } else {
      alert('Login failed');
    }
  };

  return (
    <section className="vh-100 py-100%" >
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-8 " >
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={verticalFurniture}
                    alt="login form"
                    className="img-fluid h-10"
                    style={{ borderRadius: "1rem 0 0 1rem",height:"700px",width:"100%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          User Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                         className="form-control form-control-lg"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(e)=>handleSubmit(e)}
                        >
                          Login
                        </button>
                      </div>
             
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link className='create text-primary' to="/registration">
                          Register here
                        </Link>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                      <span  className='bg-secondary  px-0 '  onClick={()=>Navigate("/adminLog")}><AccountBoxIcon /></span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </section>
     
  );
}

export default Login;