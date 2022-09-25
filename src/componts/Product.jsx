import React from "react";

function Product({ state, dispatch }) {
  const { products, cart } = state;
  return (
    <div className="products">
      {products.map((prod) => (
        <div key={prod.id} className="singleProduct">
          <img className="prodImg" src={prod.thumbnail} alt={prod.title} />
          <div className="prodDesc">
            <div>{prod.title}</div>

            <div>Price: ${prod.price}</div>
          </div>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="remove"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: {
                    id: prod.id,
                  },
                })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="add"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    price: prod.price,
                    thumbnail: prod.thumbnail,
                    qty: 1,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Product;
