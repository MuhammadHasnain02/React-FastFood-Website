// product-images
// webp

import { useNavigate } from "react-router-dom"

function TopProducts() {

    const navigate = useNavigate()

    return (
        
        <section className="w-full">

            <h2 className="text-4xl tracking-tight font-bold text-gray-600 underline mb-10 text-center cursor-pointer">
                Top Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* <!-- ========= BURGER CARD ========= --> */}
                <div onClick={() => navigate("/products")}
                    className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/burger1.webp" 
                        className="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div className="absolute top-8 left-8">
                        <p className="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Premium Taste</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            BURGER
                        </h2>
                    </div>
                </div>


                {/* <!-- ========= PIZZA CARD ========= --> */}
                <div onClick={() => navigate("/products")}
                    className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/piz1.webp" 
                        className="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div className="absolute top-8 left-8">
                        <p className="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Top Rated</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            PIZZA
                        </h2>
                    </div>
                </div>


                {/* <!-- ========= SHAWARMA CARD ========= --> */}
                <div onClick={() => navigate("/products")}
                    className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/shawarma1.webp" 
                        className="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div className="absolute top-8 left-8">
                        <p className="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Hot & Fresh</p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            SHAWARMA
                        </h2>
                    </div>
                </div>

            </div>

        </section>


    )
}

export default TopProducts