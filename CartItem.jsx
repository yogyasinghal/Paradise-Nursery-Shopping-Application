import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          backgroundColor: "#2e7d32",
          color: "white",
          borderRadius: "8px",
          marginBottom: "30px"
        }}
      >
        <h2>Paradise Nursery</h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/plants" style={{ color: "white", textDecoration: "none" }}>
            Plants
          </Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            Cart 🛒 ({totalQuantity})
          </Link>
        </div>
      </nav>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Shopping Cart</h1>

      <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "30px" }}>
        Total Cart Amount: ${totalAmount}
      </h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>Your cart is empty.</p>
          <Link to="/plants">
            <button
              style={{
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#2e7d32",
                color: "white",
                cursor: "pointer"
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "15px", flex: 1 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p style={{ fontWeight: "bold" }}>
                    Total Price: ${item.price * item.quantity}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "6px",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "6px",
                      backgroundColor: "#f9a825",
                      color: "white",
                      cursor: "pointer"
                    }}
                  >
                    -
                  </button>
                </div>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#c62828",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px"
            }}
          >
            <Link to="/plants">
              <button
                style={{
                  padding: "12px 18px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#1565c0",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Continue Shopping
              </button>
            </Link>

            <button
              onClick={handleCheckout}
