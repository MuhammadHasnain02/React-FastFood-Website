// product-images/burger1.webp
// product-images/piz1.webp
// product-images/shawarma1.webp
// product-images/fries1.jpg

function ExploreCateg() {
    return (
        
        <section className="w-full max-w-[1400px] mx-auto">

            <h2 className="text-4xl tracking-tight font-bold text-gray-600 underline mb-10">
                Explore Categories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

                {/* Card */}
                {[

                    { name: "Burger", img: "product-images/burger1.webp" },
                    { name: "Pizza", img: "product-images/piz1.webp" },
                    { name: "Shawarma", img: "product-images/shawarma1.webp" },
                    { name: "Fries", img: "product-images/fries1.jpg" },

                ].map((item, index) => (

                    <div key={index}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg
                            hover:shadow-2xl transition-all duration-500">

                        {/* Image */}
                        <img src={item.img} alt={item.name}
                            className="w-full h-70 object-cover group-hover:scale-110 transition-transform duration-700"/>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/5
                            group-hover:from-black/50 transition-all duration-500"></div>

                        {/* Text */}
                        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                            {item.name}
                        </h3>

                    </div>
                ))}

            </div>
            
        </section>

    )
}

export default ExploreCateg