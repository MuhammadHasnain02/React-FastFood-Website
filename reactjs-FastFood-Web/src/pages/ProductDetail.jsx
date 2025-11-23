import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data/product"
import Cart from "./Cart"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ProductDetail() {

    const { id } = useParams()
    const navigate = useNavigate()

    let product = products.find(prod => prod.id === +id)
    console.log(product);
    
    if (!product) {
        return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 text-center text-2xl font-semibold text-gray-600">
                Product Not Found
            </div>
            <Footer />
        </div>
        );
    }

    
    return (
        
        <div className="min-h-screen flex flex-col bg-gray-50 mt-30">
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

                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        {product.title}
                    </h1>
                    <p className={"prodRat text-yellow-400 text-[32px] h-9 flex flex-row gap-1 items-center"}>
                        {Array(5).fill().map((_, i) => (
                            <i key={i}
                            className={`fa-solid fa-star text-[14px] ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                            ></i>
                        ))}
                        <span className="text-black text-[15px] flex items-center">({product.rating})</span>
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-5">
                        {product.description}
                    </p>
                    <div className="text-3xl font-semibold text-green-600 mb-6">
                        Rs {product.price}
                    </div>
                    <button onClick={() => <Cart addedProduct={product} />}
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