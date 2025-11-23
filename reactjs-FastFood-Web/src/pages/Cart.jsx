import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Dummy products (yahan apka original cart data aye ga)
const cartItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 450,
    qty: 2,
    img: "./product-images/burger1.webp",
  },
  {
    id: 2,
    name: "Zinger Burger",
    price: 550,
    qty: 1,
    img: "./product-images/burger1.webp",
  },
  {
    id: 3,
    name: "Large Fries",
    price: 250,
    qty: 3,
    img: "./product-images/burger1.webp",
  },
];

export default function CartPage() {
  const navigation = useNavigate()

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = 200;
  const total = subtotal + delivery;

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
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-24 rounded-xl object-cover shadow-md"
                />

                <div className="flex flex-col">
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <p className="text-gray-500 text-sm">Rs {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Quantity Buttons */}
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl shadow-inner">
                  <button className="px-3 py-1 text-lg font-bold">-</button>
                  <span className="px-3 font-medium text-lg">{item.qty}</span>
                  <button className="px-3 py-1 text-lg font-bold">+</button>
                </div>
              </div>

              <p className="font-semibold text-xl w-32 text-right">Rs {item.price * item.qty}</p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 w-full lg:w-1/3 h-fit border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">Rs {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium">Rs {delivery}</span>
            </div>

            <div className="flex justify-between border-t pt-4 text-xl font-bold">
              <span>Total</span>
              <span>Rs {total}</span>
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