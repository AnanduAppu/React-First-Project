import React from 'react'
import "./Cate.css"
import { useNavigate  } from 'react-router-dom';
import imagewal from '../../assets/home/homeWal.webp'
import sofaCate1 from "../../assets/home/sofaCate1.webp"
import bedCate2 from "../../assets/home/bedCate2.webp"

function Categories() {
    const navigate = useNavigate();

    var imageAlt = "its an image"

  return (
    <>
    <div className='container imageCon'> 
        <img src={imagewal} alt={imageAlt}  height="290" width="1280"/>
    </div>
    <div className="container">
        <h4 className='cateHead'>Shop By Categories</h4>
      <div className="row">
        <div onClick={()=>navigate("/sofas")} className="col-2"><img src={sofaCate1} alt={imageAlt} height="224" width="204"/><br/>
            <p className='itemName'>Sofas</p>
        </div>
        <div onClick={()=>navigate("/beds")} className="col-2"><img src={bedCate2} alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Beds</p>
        </div>
      
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_21.jpg" alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Dinning Sets</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_32.jpg' alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Study Tables</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_15.jpg" alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Center Tables</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_7.jpg' alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Recliners</p>
        </div>
      
      
      
      </div>
      <div className="row">
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_2.jpg' alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Sectional Sofas</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_31.jpg' alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Wardrobes</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_18.jpg" alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Cabinet & Sideboards</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_33.jpg" alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Office Furnitures</p>
        </div>

        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_14.jpg" alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Shoe Racks</p>
        </div>
      
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_25.jpg' alt={imageAlt}  height="224" width="204"/><br/>
            <p className='itemName'>Bar Furniture</p>
        </div>
      
      
      
      </div>
    </div>
    </>
  )
}

export default Categories