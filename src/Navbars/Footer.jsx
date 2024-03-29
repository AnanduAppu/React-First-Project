import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className="text-center text-lg-start bg-secondary text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/" className="me-4 text-reset">
            <i ><FacebookIcon/></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i><TwitterIcon /></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i ><GoogleIcon/></i>
          </a>
          <a href="/" className="me-4 text-reset">
            <i><InstagramIcon/></i>
          </a>
     
        </div>
      </section>

      <section >
        <div className="container text-center text-md-start mt-5 ">
          <div className="row mt-3 bg-secondary">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Papperfry
              </h6>
              <p>
               It is a Demo website of Papperfry here i just focused on the react function rather than styling the component
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Our Partners
              </h6>
              <p>
                <a href="#!" className="text-reset">Indigo Crafts</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Raymond playwood</a>
              </p>
              <p>
                <a href="#!" className="text-reset">WoodLine paints</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Spunic Marketer</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Malappuram,Manjei 10012, India</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
        
      </div>
    </footer>
  )
}

export default Footer