import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";

function Cart({ state, dispatch }) {
  const [total, setTotal] = useState(0);
  const { cart } = state;
  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  }, [cart]);
  return (
    <div
      className="cart"
      style={{
        textAlign: "center",
        background: "#ececec",
        padding: 10,
        marginTop: 10,
        width: "30%",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <br />

      <b style={{ alignSelf: "center" }}>Subtotal : ${total}</b>

      <br />

      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            key={prod.title}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid grey",
              justifyContent: "space-between",
              alignItems: "center",
              width: 400,
              marginLeft: "5%",
              marginTop: "10px",
            }}
          >
            <img className="cartImg" src={prod.thumbnail} alt={prod.title} />
            <div
              className="cartDesc"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div>{prod.title}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                className="qtyAddBtn"
                onClick={() => changeQty(prod.id, prod.qty - 1)}
              >
                -
              </button>
              <span>{prod.qty}</span>
              <button
                className="qtyRemoveBtn"
                onClick={() => changeQty(prod.id, prod.qty + 1)}
              >
                +
              </button>
            </div>
            <div>Price: ${prod.price}</div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>Cart is empty</span>
      )}
    </div>
  );
}

export default Cart;
