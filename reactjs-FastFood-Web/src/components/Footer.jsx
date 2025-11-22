
function Footer() {
    return (
        <footer id="aboutSect" className="mt-auto text-gray-300 pt-12 pb-7 bg-[#556155]">

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

                {/* <!-- logo and Headline --> */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <i className="navLogo fa-solid fa-utensils text-[22px]"></i>
                        <h3 className="text-xl font-bold tracking-wide">FastFood</h3>
                    </div>
                    <div>
                        <p>Fastest food delivery service in your city.</p>
                    </div>
                </div>

                {/* <!-- Quick Links --> */}
                <div>
                    <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li className="homeBtn hover:underline hover:cursor-pointer">Home</li>
                        <li className="collectionBtn hover:underline hover:cursor-pointer">Collection</li>
                        <li className="citiesBtn hover:underline hover:cursor-pointer">Cities</li>
                        <li className="reviewsBtn hover:underline hover:cursor-pointer">Reviews</li>
                        <li className="aboutBtn hover:underline hover:cursor-pointer">About</li>
                    </ul>
                </div>

                {/* <!-- Contact Links --> */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-3">Contact</h3>
                    <div className="flex items-center space-x-2">
                        <i className="fa-regular fa-envelope text-[17px]"></i>
                        <p className="font-semibold tracking-wide">support@FastFood.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-phone text-[16px]"></i>
                        <p className="font-semibold tracking-wide">+92 300-222-333-4</p>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-between mt-10 px-4">

                {/* <!-- Left Side Copy --> */}
                <p className="text-gray-300">© 2025 FastFood — All rights reserved</p>

                {/* <!-- Right Side Social Media --> */}
                <div className="flex gap-4 text-xl">
                    <a target="_blank" href="https://www.facebook.com" className="hover:text-white"><i className="fa-brands fa-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com" className="hover:text-white"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" href="https://x.com" className="hover:text-white"><i className="fa-brands fa-x-twitter"></i></a>
                    <a target="_blank" href="https://www.youtube.com" className="hover:text-white"><i className="fa-brands fa-youtube"></i></a>
                </div>

            </div>
        
        </footer>
    )
}

export default Footer