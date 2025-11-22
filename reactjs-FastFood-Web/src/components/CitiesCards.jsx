
function CitiesCards() {
    return (
        <section className="max-w-[1260px]">
            <h2 className="fade-in text-4xl tracking-tight font-bold text-gray-600 underline mb-10">Available Cities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">

                {/* <!-- City 1: Karachi --> */}
                <div className="fade-in bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer overflow-hidden">
                
                    {/* <!-- image --> */}
                    <img src="product-images/karachi.jfif" alt="Karachi skyline" className="w-full h-45 object-cover" />
                    
                    {/* <!-- body --> */}
                    <div className="p-6 pb-9 flex flex-col h-auto justify-between">
                        
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-pink-100 text-pink-600 text-xl">
                                <i className="fa-solid fa-city"></i>
                                </div>
                                <h3 className="text-lg font-semibold">Karachi</h3>
                            </div>

                            <p className="text-gray-700 mt-3">
                                Pakistan’s largest city — coastal vibes, huge food scene, and fast delivery in Clifton, DHA, Gulshan and more.
                            </p>
                        </div>

                        <div className="mt-12">
                            <div className="flex items-center justify-between">
                                <span className="text-green-600 font-semibold">✔ Delivery Available</span>
                                <span className="text-gray-500 text-sm">30+ restaurants</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <!-- City 2: Lahore --> */}
                <div className="fade-in bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer overflow-hidden">
                    
                    {/* <!-- image --> */}
                    <img src="product-images/lahore.jfif" alt="Lahore city view" className="w-full h-45 object-cover" />
                    
                    {/* <!-- body --> */}
                    <div className="p-6 pb-9 flex flex-col justify-between">

                        <div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 text-xl">
                                <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <h3 className="text-lg font-semibold">Lahore</h3>
                            </div>

                            <p className="text-gray-700 mt-3">
                                Cultural capital with amazing street food — fast delivery across Gulberg, Johar, Model Town and surrounding areas.
                            </p>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-green-600 font-semibold">✔ Delivery Available</span>
                                <span className="text-gray-500 text-sm">25+ restaurants</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <!-- City 3: Islamabad --> */}
                <div className="fade-in bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl border border-white/40 hover:scale-[1.02] transition-all duration-400 cursor-pointer overflow-hidden">
                    
                    {/* <!-- image --> */}
                    <img src="product-images/islamabad.jpg" alt="Islamabad skyline" className="w-full h-45 object-cover" />
                    
                    {/* <!-- body --> */}
                    <div className="p-6 pb-9 flex flex-col justify-between">
                        
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-xl bg-green-100 text-green-600 text-xl">
                                <i className="fa-solid fa-shop"></i>
                                </div>
                                <h3 className="text-lg font-semibold">Islamabad</h3>
                            </div>

                            <p className="text-gray-700 mt-3">
                                Clean and green capital — delivery active in F-6 to F-8, Blue Area and Bahria sectors. Quick and reliable riders.
                            </p>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-green-600 font-semibold">✔ Delivery Available</span>
                                <span className="text-gray-500 text-sm">18+ restaurants</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default CitiesCards