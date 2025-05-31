import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FLAVORS = [
  "Orange",
  "Jasmine",
  "Ice Fresh",
  "Coffee",
  "Makeup Remover",
  "Baby Wipes",
];

// Replace these with your actual EmailJS values
const SERVICE_ID = "service_e2c7ann";
const TEMPLATE_ID = "template_5vytfca";
const PUBLIC_KEY = "cI0yMUr1UCv_vdMo9";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    quantity: 1,
    flavor: FLAVORS[0],
    feedback: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [popup, setPopup] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          quantity: form.quantity,
          flavor: form.flavor,
          feedback: form.feedback,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitting(false);
          setPopup(true);
          setForm({
            name: "",
            email: "",
            quantity: 1,
            flavor: FLAVORS[0],
            feedback: "",
          });
        },
        () => {
          setSubmitting(false);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" style={{
      background: "linear-gradient(135deg, #a259f7 0%, #7c3aed 100%)",
      borderRadius: 24,
      padding: "48px 24px",
      maxWidth: 540,
      margin: "48px auto",
      boxShadow: "0 8px 32px 0 rgba(162,89,247,0.18)",
      color: "#fff",
      position: "relative"
    }}>
      <h2 style={{
        fontSize: "2rem",
        fontWeight: 800,
        marginBottom: 8,
        textAlign: "center",
        letterSpacing: 1
      }}>
        Place Your Order
      </h2>
      <p style={{
        textAlign: "center",
        color: "#f3e8ff",
        marginBottom: 32,
        fontSize: "1.1rem"
      }}>
        Select your favorite tissue flavor, quantity, and leave us your feedback!
      </p>
      <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", gap: 16 }}>
          <input
            required
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              fontSize: 16,
              background: "#fff",
              color: "#7c3aed"
            }}
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              fontSize: 16,
              background: "#fff",
              color: "#7c3aed"
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 600, marginBottom: 4, display: "block" }}>Quantity</label>
            <input
              required
              name="quantity"
              type="number"
              min={1}
              value={form.quantity}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 16,
                background: "#fff",
                color: "#7c3aed"
              }}
            />
          </div>
          <div style={{ flex: 2 }}>
            <label style={{ fontWeight: 600, marginBottom: 4, display: "block" }}>Flavor</label>
            <select
              required
              name="flavor"
              value={form.flavor}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: 8,
                border: "none",
                fontSize: 16,
                background: "#fff",
                color: "#7c3aed"
              }}
            >
              {FLAVORS.map((flavor) => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label style={{ fontWeight: 600, marginBottom: 4, display: "block" }}>Feedback / Special Request</label>
          <textarea
            name="feedback"
            placeholder="Let us know your thoughts or any special requests..."
            value={form.feedback}
            onChange={handleChange}
            rows={3}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              fontSize: 16,
              background: "#fff",
              color: "#7c3aed",
              resize: "vertical"
            }}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: "linear-gradient(90deg, #a259f7 0%, #7c3aed 100%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
            border: "none",
            borderRadius: 8,
            padding: "14px 0",
            marginTop: 8,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(124,51,237,0.15)",
            transition: "background 0.2s"
          }}
        >
          {submitting ? "Submitting..." : "Submit Order"}
        </button>
      </form>
      {popup && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(30, 27, 75, 0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            background: "#fff",
            color: "#7c3aed",
            padding: "36px 28px",
            borderRadius: 18,
            boxShadow: "0 8px 32px 0 rgba(162,89,247,0.18)",
            textAlign: "center",
            maxWidth: 340
          }}>
            <h3 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 12 }}>
              🎉 Thank you for your order!
            </h3>
            <p style={{ fontSize: 16, marginBottom: 18 }}>
              Our team will reach out to you for the order shortly.
            </p>
            <button
              onClick={() => setPopup(false)}
              style={{
                background: "linear-gradient(90deg, #a259f7 0%, #7c3aed 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                border: "none",
                borderRadius: 8,
                padding: "10px 24px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}