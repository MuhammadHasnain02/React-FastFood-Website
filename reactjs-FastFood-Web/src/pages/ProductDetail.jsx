import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data/product"
import Cart from "./Cart"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCart } from "../Context/CartContext"
import { useState } from "react"

function ProductDetail() {

    const drinks = [

        { id: 1, name: "Red Bull", price: 1.99 },
        { id: 2, name: "Coca Cola", price: 1.99 },
        { id: 3, name: "Coke", price: 1.99 },
        { id: 4, name: "Pepsi", price: 1.99 },
        { id: 5, name: "Sprite", price: 1.99 },
        { id: 6, name: "Fanta", price: 1.99 },
        { id: 7, name: "Mirinda", price: 1.99 },
        { id: 8, name: "Mountain Dew", price: 1.99 },
        { id: 9, name: "Murree Brewery", price: 1.99 },
        { id: 10, name: "Water", price: 1.99 },

    ];

    const { id } = useParams()
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1);
    const [selectedDrink, setSelectedDrink] = useState(drinks[0].name);

    const { cartItems, addToCart, updateCartQty , removeCartItem , totalCartItems, totalCartPrice} = useCart();

    let product = products.find(prod => prod.id === +id)
    
    return (
        
        <div className="min-h-screen flex flex-col bg-gray-50 mt-35">
            <Navbar />

            {/* Product Section */}
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                    
                {/* Image */}
                <div className="flex justify-center">
                    <img src={product.image} alt={product.name}
                    className="w-full max-w-md rounded-2xl shadow-lg object-cover"/>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {product.title}
                    </h1>
                    <p className={"prodRat text-yellow-400 text-[32px] h-9 flex flex-row gap-1 items-center mb-2"}>
                        {Array(5).fill().map((_, i) => (
                            <i key={i}
                            className={`fa-solid fa-star text-[14px] ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                            ></i>
                        ))}
                        <span className="text-black text-[15px] flex items-center">({product.rating})</span>
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {product.description}
                    </p>

                    <label className="block text-lg font-semibold text-gray-800 mb-2">
                        Select Drink:
                    </label>
                    <select value={selectedDrink} className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                        onChange={(e) => {
                            setSelectedDrink(e.target.value);
                        }}>
                        {drinks.map((drink) => (
                            <option key={drink.id} value={drink.name}>
                            {drink.name}
                            </option>
                        ))}
                    </select>

                    <div className="flex items-center mb-5">
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-xl shadow-inner">

                            <button className="px-3 py-1 text-lg font-bold"
                                onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-
                            </button>
                            <p className="px-3 font-medium text-lg">{quantity}</p>
                            <button className="px-3 py-1 text-lg font-bold"
                                onClick={() => setQuantity(quantity + 1)} disabled={quantity === 10}>+
                            </button>

                        </div>
                    </div>

                    <p className="text-[28px] font-semibold text-[#899a89] mb-5">
                        Rs. {product.price}
                    </p>

                    <button onClick={() => {
                            addToCart(product, quantity, selectedDrink)
                            alert('One Item Added In Your Cart')
                        }}
                        className="bg-[#7b8b7b] text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-[#6a796a] hover:cursor-pointer transition-all duration-200 w-full md:w-auto">
                        Add to Cart
                    </button>

                </div>

            </div>


            {/* More Details */}
            <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-md mb-16">
                
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Product Details</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    {product.details || "No extra details available for this product."}
                </p>

            </div>


            <Footer />
        </div>

    )

}

export default ProductDetail