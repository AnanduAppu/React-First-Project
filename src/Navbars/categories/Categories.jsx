import React from 'react'
import "./Cate.css"
import { Link,useNavigate  } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();
  return (
    <>
    <div className='container imageCon'> 
        <img src="https://ii1.pepperfry.com/assets/e5a07aa0-7467-4e31-8685-ed34a63af55f.jpg" height="290" width="1280"/>
    </div>
    <div className="container">
        <h4 className='cateHead'>Shop By Categories</h4>
      <div className="row">
        <div onClick={()=>navigate("/sofas")} className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_1.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Sofas</p>
        </div>
        <div onClick={()=>navigate("/beds")} className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_26.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Beds</p>
        </div>
      
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_21.jpg" height="224" width="204"/><br/>
            <p className='itemName'>Dinning Sets</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_32.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Study Tables</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_15.jpg" height="224" width="204"/><br/>
            <p className='itemName'>Center Tables</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_7.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Recliners</p>
        </div>
      
      
      
      </div>
      <div className="row">
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_2.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Sectional Sofas</p>
        </div>
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_31.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Wardrobes</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_18.jpg" height="224" width="204"/><br/>
            <p className='itemName'>Cabinet & Sideboards</p>
        </div>
        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_33.jpg" height="224" width="204"/><br/>
            <p className='itemName'>Office Furnitures</p>
        </div>

        <div className="col-2"><img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_14.jpg" height="224" width="204"/><br/>
            <p className='itemName'>Shoe Racks</p>
        </div>
      
        <div className="col-2"><img src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_25.jpg' height="224" width="204"/><br/>
            <p className='itemName'>Bar Furniture</p>
        </div>
      
      
      
      </div>
    </div>
    </>
  )
}

export default Categories