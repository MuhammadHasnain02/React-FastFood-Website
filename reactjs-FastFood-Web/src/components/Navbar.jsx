import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ onChange }) {

    const navigate = useNavigate()
    let [searchInp , setSearchInp] = useState("")

    const handleInp = (e) => {
        setSearchInp(e.target.value)
        onChange && onChange(e.target.value);
        console.log("Search Inp" , e.target.value);
    }

    return (
        // <!-- Navbar -->
        <nav className="navbar fixed top-0 left-0 w-full z-10">

            <div className="mainNavDiv bg-[#556155] flex flex-row justify-between px-8 gap-10 py-3.5 sm:justify-between md:justify-end lg:justify-end xl:justify-end 2xl:justify-end">

                <ul className="flex space-x-1.5 text-[9px] sm:text-[13px] sm:space-x-5 md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px]">
                    <li className="homeBtn text-gray-200 hover:underline hover:cursor-pointer">Home</li>
                    <li className="collectionBtn text-gray-200 hover:underline hover:cursor-pointer">Collection</li>
                    <li className="citiesBtn text-gray-200 hover:underline hover:cursor-pointer">Cities</li>
                    <li className="reviewsBtn text-gray-200 hover:underline hover:cursor-pointer">Reviews</li>
                    <li className="aboutBtn text-gray-200 hover:underline hover:cursor-pointer">About</li>
                </ul>
                <div className="flex flex-row items-center text-[9px] sm:text-[12px] md:text-[11px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] font-[Montserrat]  hover:cursor-pointer">
                    <i className="fa-regular fa-circle-user text-gray-300 pr-4 sm:pr-5 md:pr-6 lg:pr-6 xl:pr-6 2xl:pr-6"></i>
                    <p onClick={(() => navigate('/signin'))}
                     className="text-gray-200 hover:underline pr-2 border-r-1">LOGIN</p>
                    <p onClick={(() => navigate('/signup'))}
                     className="text-gray-200 hover:underline pl-2">REGISTER</p>
                </div>

            </div>

            {/* <!-- Search Nav --> */}
            <div className="navSearchDiv flex flex-row justify-evenly py-5 bg-white">

                <div className="mainLogoDiv flex items-center transition-transform duration-500 hover:cursor-pointer hover:scale-105">
                    <a href="index.html"><i className="navLogo fa-solid fa-utensils text-[25px] text-[#616e61]" ></i></a>
                    <p className="navLogoTxt text-[21px] pl-2 font-semibold">FastFood</p>
                </div>
                <div className="text-center navInp">
                    <input id="searchBox" type="search" onChange={handleInp} value={searchInp} placeholder="Search products..." 
                    className="border border-gray-300 shadow-md shadow-gray-300 rounded-3xl w-[650px] p-[10px] pl-5 font-sans bg-[#e7e7e7] focus:outline-gray-400" />
                </div>
                <div onClick={() => navigate('/cart')}
                    className="flex flex-row items-center justify-end hover:cursor-pointer gap-2 rounded-xl border border-gray-300 px-8 py-1 transition duration-400 hover:scale-105">
                    <i className="navCartIcon fa-solid fa-cart-shopping text-[22px] text-[#616e61]"></i>
                    <span className="text-[16px]">Cart</span>
                </div>

            </div>
            
        </nav>
    )

}

export default Navbar;
