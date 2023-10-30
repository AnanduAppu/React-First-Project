import React from 'react'
import Usercontex from '../Contex/Createcontex'
import { useContext,useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Adminlog() {
    const{adminData,setAdminData}=useContext(Usercontex)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    if (!username || !password) {
        alert('Please fill in both username and password fields.');
        return;
      }

      const user = adminData.find(user => user.userName === username && user.password === password);

      if (user) {
        alert('Login successful');
        
       
        navigate("/Admin")
      } else {
        alert('Login failed. Please check');
      }
    };

  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: '1rem' }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://ii1.pepperfry.com/assets/f4efcbda-027a-4138-bd4c-c3d89a33e9a9.jpg"
                  alt="login form"
                  className="img-fluid"
                  width="800px"
                  height="500px"
                  style={{ borderRadius: '1rem 0 0 1rem' }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                      <span className="h1 fw-bold mb-0"><img src="https://ii1.pepperfry.com/assets/w38-pf-logo-desktop.svg"/></span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                      Admin Reporting, please sign in
                    </h5>
                    <Form.Group className="mb-4">
                      <InputGroup>
                        <FormControl
                          type="text"
                          id="form2Example17"
                          placeholder="User Name"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Label htmlFor="form2Example17">User Name</Form.Label>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <InputGroup>
                        <FormControl
                          type="password"
                          id="form2Example27"
                          placeholder="Enter your password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Label htmlFor="form2Example27">Password</Form.Label>
                      </InputGroup>
                    </Form.Group>
                    <div className="pt-1 mb-4">
                      <Button variant="dark" className="btn-lg btn-block" type="button" onClick={handleSubmit}>
                        Login
                      </Button>
                    </div>
                    
                    <a className="small text-muted" href="#!">
                      Terms of use.
                    </a>
                    <a className="small text-muted" href="#!">
                      Privacy policy
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Adminlog