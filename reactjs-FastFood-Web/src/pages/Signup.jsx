import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


function Signup() {
    
    
    return (

        <section>
            <Navbar />

            {/* <!-- Signup Page Wrapper --> */}
            <div className="flex items-center justify-center py-10 px-4 my-30">

                <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-8 border border-gray-200">

                    {/* <!-- Title --> */}
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Create Your Account</h2>
                    <p className="text-gray-600 text-center mb-8">Join us and start ordering your favorite meals!</p>

                    {/* <!-- Form --> */}
                    <form className="flex flex-col gap-5">

                    {/* <!-- Full Name --> */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700">Full Name</label>
                        <input type="text" placeholder="Enter your full name" className="px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-green-400 outline-none" />
                    </div>

                    {/* <!-- Email --> */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-green-400 outline-none" />
                    </div>

                    {/* <!-- Password --> */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Create a password" className="px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-green-400 outline-none" />
                    </div>

                    {/* <!-- Confirm Password --> */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-700">Confirm Password</label>
                        <input type="password" placeholder="Confirm your password" className="px-4 py-3 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-green-400 outline-none" />
                    </div>

                    {/* <!-- Signup Button --> */}
                    <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition-all text-lg cursor-pointer">Sign Up</button>

                    </form>

                    {/* <!-- Already have account? --> */}
                    <p className="text-center mt-6 text-gray-700">Already have an account?
                    <a href="/login" className="text-green-600 font-semibold hover:underline">Login</a>
                    </p>

                </div>

            </div>

            <Footer />
        </section>

    )

}

export default Signup