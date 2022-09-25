import React, { useState, useReducer } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { useEffect } from "react";
import axios from "axios";
import { cartReducer } from "../reducer/cartReducer";
function Home() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  console.log(state);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=12&skip=12"
      );
      // console.log(data);
      dispatch({
        type: "ADD_PRODUCTS",
        payload: data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="productsContainer">
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default Home;

/*on add to cart button click the product should show on cart page.
 1-we have to create a cart state

 */

// if i click remove page the product should remove from the cart
