import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Signup() {
    
    const navigation = useNavigate()
    
    return (

        <section>
            <Navbar />

            {/* <!-- Signup Page Wrapper --> */}
            <div className="flex items-center justify-center py-10 px-4 mt-35 mb-10">

                <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-8 border border-gray-200">

                    {/* <!-- Title --> */}
                    <h2 className="text-3xl font-bold text-[#6e7f6e] text-center mb-1">Create Your Account</h2>
                    <p className="text-gray-600 text-center mb-6">Join us and start ordering your favorite meals!</p>

                    {/* <!-- Form --> */}
                    <form className="flex flex-col gap-6">

                        {/* <!-- Full Name --> */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Full Name</label>
                            <input type="text" placeholder="Enter your full name" className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>

                        {/* <!-- Email --> */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Email</label>
                            <input type="email" placeholder="Enter your email" className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>

                        {/* <!-- Password --> */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Password</label>
                            <input type="password" placeholder="Create a password" className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Confirm Password</label>
                            <input type="password" placeholder="Confirm your password" className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>

                        {/* <!-- Signup Button --> */}
                        <button onClick={() => alert('This Feature is Unavailable')}
                        className="w-full py-3 bg-[#859a85] text-white font-semibold rounded-xl shadow hover:bg-[#738573] transition-all text-lg cursor-pointer">Sign Up</button>

                    </form>

                    {/* <!-- Already have account? --> */}
                    <div className="flex justify-center mt-6 text-gray-700">Already have an account ?
                        <p onClick={() => navigation('/signin')} className="text-green-600 font-semibold hover:underline pl-1 cursor-pointer">Login</p>
                    </div>

                </div>

            </div>

            <Footer />
        </section>

    )

}

export default Signup