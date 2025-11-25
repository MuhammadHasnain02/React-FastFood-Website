import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../Context/CartContext";

export default function CheckoutPage() {
  const { cartItems, cartQty , addToCart, updateCartQty , removeCartItem , totalCartItems, totalCartPrice } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.cartQty, 0);
  const delivery = 200;
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + tax + delivery;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    payment: "card",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Order Placed Successfully! (Dummy)");
  }

  return (
    <section>
      <Navbar />

      <div className="w-full bg-gray-100 p-6 flex justify-center">

        <div className="w-full max-w-6xl grid md:grid-cols-3 gap-8 mt-40 mb-15">

          {/* ================= LEFT SIDE — CHECKOUT FORM ================= */}
          <div className="md:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
            
            <h1 className="text-4xl text-[#637363] underline font-extrabold mb-8 tracking-tight">Checkout</h1>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
                <input type="text" name="fullName" required
                  value={form.fullName} onChange={handleChange}
                  className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Email</label>
                  <input type="email" name="email" required
                    onChange={handleChange} value={form.email}
                    className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Phone Number</label>
                  <input type="text" name="phone" required
                    onChange={handleChange} value={form.phone}
                    className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Complete Address</label>
                <textarea
                  name="address" required
                  onChange={handleChange} value={form.address}
                  className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm h-28 resize-none focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* City + Postal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">City</label>
                  <input type="text" name="city" required
                    onChange={handleChange} value={form.city}
                    className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Postal Code</label>
                  <input type="text" name="postal" required
                    onChange={handleChange} value={form.postal}
                    className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block mb-1 font-semibold text-gray-700">Payment Method</label>
                <select name="payment"
                  onChange={handleChange} value={form.payment}
                  className="w-full border border-gray-400 px-4 py-3 rounded-2xl shadow-sm focus:ring-2 focus:ring-black outline-none"
                >
                  <option value="card">Credit / Debit Card</option>
                  <option value="cod">Cash On Delivery</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#728372] cursor-pointer text-white py-4 rounded-2xl text-xl font-semibold transition hover:bg-[#637363]"
              >
                Place Order
              </button>

            </form>

          </div>

          {/* ================= RIGHT SIDE — ORDER SUMMARY ================= */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 h-max sticky top-6">
            <h2 className="text-[#596a59] text-[28px] font-bold mb-4">Order Summary</h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3.5 mb-3.5"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-[19px]">{item.title}</h3>
                    <p className="text-gray-500 text-[16px]">Drink : {item.cartDrink}</p>
                    <p className="text-gray-500 text-[15px]">Quantity : {item.cartQty}</p>
                  </div>
                </div>


                <p className="font-semibold text-xl w-32 text-right">Rs {item.price * item.cartQty}</p>
              </div>
            ))}

            {/* Price Breakdown */}
            <div className="space-y-2 border-b pb-3.5 mb-4">
              <div className="flex justify-between text-gray-700">
                <p>Subtotal</p>
                <p>Rs {subtotal}</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Delivery</p>
                <p>Rs {!subtotal ? 0 : delivery}</p>
              </div>
              <div className="flex justify-between text-gray-700">
                <p>Tax</p>
                <p>Rs {tax}</p>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between text-xl font-bold ">
              <p>Total:</p>
              <p className="">Rs {!subtotal ? 0 : total}</p>
            </div>
          </div>

        </div>


      </div>

      <Footer />
    </section>
  );
}