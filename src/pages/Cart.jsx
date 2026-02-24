// useContext hook is used to access values from CartContext
import { useContext, useState} from "react";

// Import CartContext to get cart data and cart-related functions
import { CartContext } from "../context/CartContext";

// Link is used for navigation without reloading the page
import { Link } from "react-router-dom";

// Cart component
export default function Cart() {

  const [itemToDelete, setItemToDelete] = useState(null);
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem
  } = useContext(CartContext);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        background: "#f1f3f6",
        minHeight: "100vh",
        padding: "30px 0"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >

        {/* ================= LEFT CART SECTION ================= */}
        <div
          style={{
            flex: 3,
            background: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            overflow: "hidden"
          }}
        >

          {/* CART HEADER */}
          <div
            style={{
              background: "#1f2937",
              padding: "18px 25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h2 style={{ margin: 0, color: "#ffffff" }}>
              Shopping Cart
            </h2>

            <span style={{ color: "#9ca3af", fontSize: "14px" }}>
              Review your items
            </span>
          </div>

          {/* CART ITEMS LIST */}
          <div style={{ padding: "25px" }}>
            {cart.length === 0 ? (
              <>
                <p style={{ marginBottom: "12px", fontSize: "16px" }}>
                  Your cart is empty.
                </p>

                <Link
                  to="/"
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                    textDecoration: "underline",
                    fontSize: "15px"
                  }}
                >
                  Continue Shopping
                </Link>
              </>
            ) : (
              cart.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90px 1fr 120px 160px 80px",
                    alignItems: "center",
                    padding: "15px 0",
                    borderBottom: "1px solid #e0e0e0"
                  }}
                >

                  {/* PRODUCT IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  {/* PRODUCT NAME */}
                  <div style={{ fontWeight: "bold" }}>
                    {item.title}
                  </div>

                  {/* PRODUCT PRICE */}
                  <div>
                    ₹{item.price}
                  </div>

                  {/* QUANTITY CONTROLLER */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#1f2937",
                      padding: "5px",
                      borderRadius: "6px",
                      color: "#ffffff",
                      width: "fit-content",
                      justifySelf: "center"
                    }}
                  >
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      style={{
                        width: "26px",
                        height: "26px",
                        background: "#111827",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                        opacity: item.quantity === 1 ? 0.5 : 1
                      }}
                    >
                      −
                    </button>

                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {item.quantity}
                    </div>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      style={{
                        width: "26px",
                        height: "26px",
                        background: "#111827",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* DELETE BUTTON */}
                 <button
  onClick={() => setItemToDelete(item)}
  style={{
    background: "none",
    border: "none",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600"
  }}
>
  Delete
</button>

                </div>
              ))
            )}
          </div>
        </div>

        {/* ================= RIGHT SUMMARY SECTION ================= */}
        {cart.length > 0 && (
          <div
            style={{
              flex: 1,
              background: "#ffffff",
              padding: "25px",
              borderRadius: "10px",
              height: "fit-content",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              Subtotal ({totalItems} items)
            </h3>

            <h2 style={{ margin: "15px 0" }}>
              ₹{subtotal.toFixed(2)}
            </h2>

            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                marginTop: "15px",
                paddingTop: "15px",
                fontSize: "14px",
                color: "#374151"
              }}
            >
              {cart.map(item => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <div style={{ fontWeight: "500" }}>
                    {item.title}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "4px"
                    }}
                  >
                    <span>
                      ₹{item.price} × {item.quantity}
                    </span>
                    <span style={{ fontWeight: "bold" }}>
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "20px",
                background: "#1f2937",
                color: "#ffffff",
                border: "none",
                borderRadius: "25px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Proceed to Buy
            </button>
          </div>
        )}
      </div>
      {/* DELETE CONFIRMATION MODAL */}
{itemToDelete && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>
        Remove Item?
      </h3>

      <p style={{ marginBottom: "25px", color: "#555" }}>
        Are you sure you want to remove
        <br />
        <strong>{itemToDelete.title}</strong>
        <br />
        from your cart?
      </p>

      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button
          onClick={() => {
            removeItem(itemToDelete.id);
            setItemToDelete(null);
          }}
          style={{
            padding: "10px 20px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Yes
        </button>

        <button
          onClick={() => setItemToDelete(null)}
          style={{
            padding: "10px 20px",
            background: "#e5e7eb",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          No
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
