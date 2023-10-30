import "./admin.css"
import image from"./0.jpg"
import { Link, Outlet } from "react-router-dom";


function Main() {
  return (
<div>
        <nav className="menu" >
          <div className="smartphone-menu-trigger" />
          <header className="avatar">
            <img src={image} alt='no image' />
            <h2 className="avatartitle">Anandu</h2>
          </header>
          <ul className="ultag">
         
          <Link to="/Admin/users">  <li  className=" ulchid"><span className="lispan">Users</span></li></Link>
            <Link to="/Admin/products"><li  className=" ulchid">Products<span className="lispan"></span></li></Link>
           <Link to="/"> <li className="ulchid"><span className="lispan">Home</span></li></Link>
          </ul>
        </nav>
        <Outlet/>
        <div className="Details">
        <section className="py-3 py-md-5">
      <div className="container mb-4 mb-md-5">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-xxl-8">
            <img className="img-fluid rounded shadow" loading="lazy" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About 3" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-2 gy-md-0 justify-content-xxl-center">
          <div className="col-12 order-md-1 col-md-8 col-xxl-6">
            <div className="text-center text-md-start">
              <h2 className="display-3 fw-bold lh-1">Anandu</h2>
              <p className="text-secondary fs-4 mb-2">Front-End Developer</p>
              <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
              <p>I am an enthusiastic and dedicated front-end developer with a passion for creating stunning and user-friendly web experiences. As a recent graduate with a strong foundation in HTML, CSS, and JavaScript. I am eager to contribute my skills and bring fresh perspectives to web projects</p>
              <p>This is my React project is an impressive showcase of my skills as a front-end developer. Using React's powerful library, I maded this simple ecommerce website pages</p>
            </div>
          </div>
          <div className="col-12 order-md-0 col-md-4 col-xxl-4">
            <div className="text-center text-md-start me-md-3 me-xl-5">
             
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" type="button">Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
</div>

  );
}

export default Main;


