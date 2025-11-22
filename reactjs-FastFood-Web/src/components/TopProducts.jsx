// product-images
// webp

function TopProducts() {
    return (
        
        <section class="w-full">

            <h2 class="text-4xl tracking-tight font-bold text-gray-600 underline mb-10 text-center cursor-pointer">
                Top Products
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* <!-- ========= BURGER CARD ========= --> */}
                <div class="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/burger1.webp" 
                        class="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div class="absolute top-8 left-8">
                        <p class="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Premium Taste</p>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            BURGER
                        </h2>
                    </div>
                </div>


                {/* <!-- ========= PIZZA CARD ========= --> */}
                <div class="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/piz1.webp" 
                        class="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div class="absolute top-8 left-8">
                        <p class="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Top Rated</p>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            PIZZA
                        </h2>
                    </div>
                </div>


                {/* <!-- ========= SHAWARMA CARD ========= --> */}
                <div class="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gray-900">
                    <img src="/product-images/shawarma1.webp" 
                        class="absolute right-0 bottom-0 h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"/>
                    
                    <div class="absolute top-8 left-8">
                        <p class="text-white text-sm font-medium bg-black/40 px-4 py-1 rounded-full">Hot & Fresh</p>
                        <h2 class="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mt-3">
                            SHAWARMA
                        </h2>
                    </div>
                </div>

            </div>

        </section>


    )
}

export default TopProducts