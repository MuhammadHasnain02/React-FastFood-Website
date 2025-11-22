
function ReviewCardsSect() {
    return (
        <section className="max-w-[1260px]">
            <h2 className="fade-in text-4xl tracking-tight font-bold text-gray-600 underline mb-10">Customer Food Reviews</h2>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
                {/* <!-- Review 1 --> */}
                <div className="fade-in flex flex-col h-auto justify-between bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer">
                    
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-pink-100 text-pink-600 text-xl">
                            <i className="fa-solid fa-burger"></i>
                        </div>
                        <h3 className="text-lg font-semibold">Taste & Quality</h3>
                    </div>
    
                    <p className="text-gray-700 mt-3">
                        Food was fresh, perfectly seasoned, and served warm.  
                        A great experience for anyone craving delicious meals.
                    </p>
    
                    <div className="mt-6 flex text-yellow-500 tracking-widest text-lg">
                        ★★★★☆
                    </div>
    
                    <p className="text-gray-500 text-sm mt-1">4.0/5 — Based on 2,340 reviews</p>
    
                </div>
    
                {/* <!-- Review 2 --> */}
                <div className="fade-in flex flex-col h-auto justify-between bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer">
                    
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 text-xl">
                            <i className="fa-solid fa-motorcycle"></i>
                        </div>
                        <h3 className="text-lg font-semibold">Delivery Speed</h3>
                    </div>
    
                    <p className="text-gray-700 mt-3">
                        Food arrived hot and earlier than expected.  
                        Fast riders make the service super reliable.
                    </p>
    
                    <div className="mt-6 flex text-yellow-500 tracking-widest text-lg">
                        ★★★★★
                    </div>
    
                    <p className="text-gray-500 text-sm mt-1">5.0/5 — Based on 1,980 reviews</p>
    
                </div>
    
                {/* <!-- Review 3 --> */}
                <div className="fade-in flex flex-col h-auto justify-between bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer">
                    
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-green-100 text-green-600 text-xl">
                            <i className="fa-solid fa-utensils"></i>
                        </div>
                        <h3 className="text-lg font-semibold">Food Packaging</h3>
                    </div>
    
                    <p className="text-gray-700 mt-3">
                        Packaging was clean, secure, and eco-friendly.  
                        Meals stayed intact and looked restaurant-fresh.
                    </p>
    
                    <div className="mt-6 flex text-yellow-500 tracking-widest text-lg">
                        ★★★★★
                    </div>
    
                    <p className="text-gray-500 text-sm mt-1">5.0/5 — Based on 1,530 reviews</p>
    
                </div>
    
            </div>
        </section>
    )
}

export default ReviewCardsSect