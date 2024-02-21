import React from "react";

import { useState, useContext, useEffect } from "react";
import Usercontex from "../../Contex/Createcontex";

function ProductItems() {
  const { search,  cart, SetCart,proData, setCartCount } = useContext(Usercontex);
  const [data, setData] = useState(proData);

  console.log(cart);
  
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart,setCartCount]);

  useEffect(() => {
    function filteritem(itemname) {
      const result = itemname.filter((val) => {
        return search === "" ? val : val.name.toLowerCase().includes(search.toLowerCase());
      });
      setData(result);
      console.log(search);
    }
  
    filteritem(proData);
  }, [search, proData]);
  console.log(cart.length);


  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      SetCart(updatedCart);
      console.log(updatedCart);
    } else {
      SetCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", backGround: "yellow" }}>
        Furniture Products
      </h1>
      <div className="Container-fluid">
        <div className="col-md-12">
          <div className="row">
            {data.map((value) => {
              const { id, name, image, price } = value;

              return (
                <>
                  <div className="col-md-4 mb-4" key={id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={image}
                        alt={name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{price}</p>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <button
                          href="#"
                          className="btn btn-dark"
                          onClick={() => addToCart(value)}
                          onMouseUp={() => setCartCount(cart.length)}
                        >
                          Add to Cart
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
  );
}

export default ProductItems;
