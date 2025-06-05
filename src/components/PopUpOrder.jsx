import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PopUpOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const toggleForm = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopupPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Order submitted successfully!');
    toggleForm();
  };

  return (
    <>
      {/* Floating Order Button */}
      <button
        ref={buttonRef}
        style={{
          position: "fixed",
          bottom: "40px",
          left: "40px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          color: "white",
          border: "none",
          boxShadow: "0 4px 12px rgb(0, 0, 0)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: isOpen ? "rotate(405deg)" : "rotate(0)",
          hover: {
            transform: "scale(1.1)",
          }
        }}
        onClick={toggleForm}
      >
        🛒
      </button>

      {/* Popup Order Form */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            opacity: 0,
            animation: "fadeIn 0.3s ease forwards",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) toggleForm();
          }}
        >
          <div
            className="card p-4 shadow-lg"
            style={{
              maxWidth: "500px",
              width: "90%",
              maxHeight: "90vh",
              overflow: "auto",
              animation: `popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              transformOrigin: `${popupPosition.x}px ${popupPosition.y}px`,
              background: "white",
              borderRadius: "16px",
            }}
          >
            <h4 className="text-center mb-3 fw-bold" style={{ color: "#7c3aed" }}>
              Place Your Order
            </h4>
            <p className="text-center text-muted small mb-4">
              Select your favorite tissue flavor, quantity, and leave feedback!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-2">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Your Name" 
                  required 
                />
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  required 
                />
              </div>

              <div className="mb-3 d-flex gap-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  min="1"
                  required
                />
                <select className="form-select" required>
                  <option value="">Select Flavor</option>
                  <option>Orange</option>
                  <option>Jasmine</option>
                  <option>Ice Fresh</option>
                  <option>Coffee</option>
                  <option>Makeup Remover</option>
                  <option>Baby Wipes</option>
                </select>
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Feedback / Special Request"
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#7c3aed",
                  color: "white",
                  fontWeight: "600",
                  padding: "12px",
                  fontSize: "1.1rem",
                  transition: "background-color 0.3s",
                  hover: {
                    backgroundColor: "#6d28d9",
                  }
                }}
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .form-control, .form-select {
            border: 1px solid #e5e7eb;
            padding: 10px;
            transition: all 0.3s;
          }

          .form-control:focus, .form-select:focus {
            border-color: #7c3aed;
            box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
          }

          /* Scrollbar Styling */
          .card::-webkit-scrollbar {
            width: 8px;
          }

          .card::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }

          .card::-webkit-scrollbar-thumb {
            background:rgb(58, 237, 136);
            border-radius: 4px;
          }

          .card::-webkit-scrollbar-thumb:hover {
            background: #6d28d9;
          }
        `}
      </style>
    </>
  );
};

export default PopUpOrder;