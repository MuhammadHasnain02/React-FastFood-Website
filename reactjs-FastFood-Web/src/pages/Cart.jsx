import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCart } from "../Context/CartContext";


export default function CartPage() {
  const navigation = useNavigate()
  const { cartItems, cartQty , addToCart, updateCartQty , removeCartItem , totalCartItems, totalCartPrice } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.cartQty, 0);
  const delivery = 200;
  const total = subtotal + delivery;

  console.log(cartItems);

  if (!cartItems.length) {
    
    return (
      <div className="flex flex-col min-h-screen justify-between bg-gray-50">
        <Navbar />

        <div className="flex flex-col items-center justify-center flex-grow px-6 py-20 text-center mt-30">
          
          {/* Icon Circle */}
          <div className="w-32 h-32 bg-white shadow-lg rounded-full flex items-center justify-center mb-6 border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m0 0h14m-12 0a2 2 0 104 0m8 0a2 2 0 104 0"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-700 mb-2">
            Your Cart is Empty
          </h2>

          {/* One-line sentence */}
          <p className="text-gray-500 text-lg mb-8">
            Looks like you haven't added anything yet — explore delicious items and fill your cart!
          </p>

          {/* Button */}
          <p onClick={() => navigation('/products')}
            className="bg-[#728372] hover:bg-[#5f6f5f] text-white px-8 py-3 rounded-xl text-lg shadow-md transition-all cursor-pointer"
          >
            Start Ordering
          </p>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto w-full mt-40 mb-15">

        {/* Cart Items */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 w-full lg:w-2/3 border border-gray-200">
          <h2 className="text-[25px] text-[#5f6f5f] font-bold mb-5 underline">Cart Items</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl p-4 mb-4 hover:bg-gray-50 transition-all border border-gray-200 shadow-sm"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-24 rounded-xl object-cover shadow-md"
                />

                <div className="flex flex-col">
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-md">Drink : {item.cartDrink}</p>
                  <p className="text-gray-500 text-sm">Rs {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Quantity Buttons */}
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl shadow-inner">
                  <button className="px-3 py-1 text-lg font-bold">-</button>
                  <span className="px-3 font-medium text-lg">{item.cartQty}</span>
                  <button className="px-3 py-1 text-lg font-bold">+</button>
                </div>
              </div>

              <p className="font-semibold text-xl w-32 text-right">Rs {item.price * item.cartQty}</p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 w-full lg:w-1/3 h-fit border border-gray-200">
          <h2 className="text-[#596a59] text-2xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">Rs {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium">Rs {!subtotal ? 0 : delivery}</span>
            </div>

            <div className="flex justify-between border-t pt-4 text-xl font-bold">
              <span>Total</span>
              <span>Rs {!subtotal ? 0 : total}</span>
            </div>
          </div>

          <button onClick={ () => navigation("/checkout") }
            className="w-full bg-[#728372] text-white mt-6 py-4 rounded-xl text-lg font-semibold shadow-lg cursor-pointer hover:bg-[#637363] transition-all">
            Proceed to Checkout
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
}