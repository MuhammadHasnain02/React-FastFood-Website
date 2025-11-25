import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <section className="bg-gray-50 mt-40 mb-10">
        <Navbar />

        {/* ======================= HERO SECTION ======================= */}
        <div className="text-center py-16 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700">
            About <span className="text-green-600">Our Food Service</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We deliver fresh, delicious food prepared with love and delivered with care.
            </p>
        </div>

        {/* ======================= ABOUT CONTENT ======================= */}
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT IMAGE */}
            <div>
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                className="rounded-3xl shadow-xl border border-gray-400"
            />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
                We provide high-quality meals made with premium ingredients.  
                Fast delivery, great taste, and customer satisfaction — that’s our promise.
            </p>

            <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                <i className="fa-solid fa-burger text-green-600 text-2xl"></i>
                <p className="text-gray-700 text-lg font-medium">Fresh & Hot Food</p>
                </div>

                <div className="flex items-center gap-3">
                <i className="fa-solid fa-truck-fast text-green-600 text-2xl"></i>
                <p className="text-gray-700 text-lg font-medium">Fast Delivery</p>
                </div>

                <div className="flex items-center gap-3">
                <i className="fa-solid fa-star text-green-600 text-2xl"></i>
                <p className="text-gray-700 text-lg font-medium">Top rated service</p>
                </div>

            </div>
            </div>

        </div>

        {/* ======================= SERVICES SECTION ======================= */}
        <div className="max-w-6xl mx-auto px-6 py-14">
            <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
                Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* CARD 1 */}
                <div className="flex flex-col justify-between border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-utensils text-green-600 text-3xl"></i>
                        <h3 className="text-xl font-semibold text-gray-700">Quality Meals</h3>
                    </div>
                    <p className="text-gray-600">We cook with premium ingredients for the best taste.</p>
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col justify-between border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-headset text-green-600 text-3xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">24/7 Support</h3>
                    </div>
                    <p className="text-gray-600">We are always available to help you 24/7 Support.</p>
                </div>

                {/* CARD 3 */}
                <div className="flex flex-col justify-between border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-mobile-screen text-green-600 text-3xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Online Ordering</h3>
                    </div>
                    <p className="text-gray-600">Order anytime with our smooth online experience.</p>
                </div>

            </div>
        </div>


        {/* ======================= FOOD ITEMS SECTION ======================= */}
        <div className="max-w-6xl mx-auto px-6 py-14">

            <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
                Our Popular Food Items
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Burger */}
                <div className="border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-burger text-green-600 text-4xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Burger</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Juicy, fresh & flavorful. Our premium beef & chicken burgers.
                    </p>
                </div>

                {/* Pizza */}
                <div className="border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-pizza-slice text-green-600 text-4xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Pizza</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Hot & cheesy with imported toppings baked to perfection.
                    </p>
                </div>

                {/* Shawarma */}
                <div className="border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-bowl-food text-green-600 text-4xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Shawarma</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Soft Arabic pita, juicy chicken & our exclusive sauce.
                    </p>
                </div>

                {/* Drinks */}
                <div className="border border-gray-400 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                    <div className="flex items-center space-x-2.5">
                        <i className="fa-solid fa-glass-water text-green-600 text-4xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Drinks</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Fresh juices, soft drinks & perfect combos for your meals.
                    </p>
                </div>

            </div>

        </div>

        {/* ======================= CONTACT FORM ======================= */}
        <div className="bg-white border-t border-gray-300 py-16 px-6">

            <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
            Contact Us
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* CONTACT INFO */}
            <div className="space-y-6">

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-location-dot text-green-600 text-2xl"></i>
                <p className="text-gray-700">Nazimabad, Karachi, Pakistan</p>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-green-600 text-2xl"></i>
                <p className="text-gray-700">+92 300-222-333-4</p>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-green-600 text-2xl"></i>
                <p className="text-gray-700">support@fastfood.com</p>
                </div>

            </div>

            {/* CONTACT FORM */}
            <form className="space-y-4 border border-gray-300 p-6 rounded-2xl bg-gray-50 shadow-md">

                <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white outline-none"
                />

                <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white outline-none"
                />

                <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white outline-none"
                ></textarea>

                <button className="w-full py-3 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 cursor-pointer transition">
                    Send Message
                </button>

            </form>

            </div>
        </div>

        <Footer />
    </section>
  );
}

export default About;
