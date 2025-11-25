import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Dashboard() {

    return (

        <section>
            <Navbar />

            <div class="mx-15 flex flex-col gap-6 mt-50 my-30">

                {/* <!-- Page Header --> */}
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <h1 class="text-3xl font-bold text-gray-800">Orders Dashboard</h1>
                    <input type="text" placeholder="Search orders..."
                    class="px-4 py-2 rounded-lg shadow bg-white border border-gray-300 w-full sm:w-70"/>
                </div>

                {/* <!-- Orders Table --> */}
                <div class="bg-gray-100 rounded-xl shadow overflow-x-auto cursor-pointer">
                    <table class="min-w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                        <th class="p-3 text-left font-semibold text-gray-700">Order ID</th>
                        <th class="p-3 text-left font-semibold text-gray-700">Customer</th>
                        <th class="p-3 text-left font-semibold text-gray-700">Items</th>
                        <th class="p-3 text-left font-semibold text-gray-700">Price</th>
                        <th class="p-3 text-left font-semibold text-gray-700">Status</th>
                        <th class="p-3 text-left font-semibold text-gray-700">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <!-- Order Row Example --> */}
                        <tr class="border-b hover:bg-gray-50 transition">
                            <td class="p-3 font-medium">#ORD-1021</td>
                            <td class="p-3">Hasnain</td>
                            <td class="p-3">3 Items</td>
                            <td class="p-3 font-semibold">Rs 1450</td>
                            <td class="p-3">
                                <span class="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700 font-medium">Pending</span>
                            </td>
                            <td class="p-3">
                                <button class="px-4 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">Mark Delivered</button>
                            </td>
                        </tr>

                        <tr class="border-b hover:bg-gray-50">
                            <td class="p-3 font-medium">#ORD-1022</td>
                            <td class="p-3">Ali</td>
                            <td class="p-3">1 Item</td>
                            <td class="p-3 font-semibold">Rs 600</td>
                            <td class="p-3">
                                <span class="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 font-medium">Delivered</span>
                            </td>
                            <td class="p-3">
                                <button class="px-4 py-1 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700">View</button>
                            </td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="p-3 font-medium">#ORD-1023</td>
                            <td class="p-3">Saad</td>
                            <td class="p-3">2 Items</td>
                            <td class="p-3 font-semibold">Rs 980</td>
                            <td class="p-3">
                                <span class="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700 font-medium">Preparing</span>
                            </td>
                            <td class="p-3">
                                <button class="px-4 py-1 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>

            </div>

            <Footer />
        </section>


    )

}

export default Dashboard