import { useState } from "react";

function FiltersChipsBar({ 
    onChangeIPP , onChangeS , 
    selectedCateg , selectedRating , selectedRange , 
    onRemoveCategory , onRemoveRating , onRemoveRange
 }) {

    const handleChangeIPP = (e) => {

        const val = Number(e.target.value);
        onChangeIPP && onChangeIPP(val)
        console.log("Items per page:", val);

    };

    let [selectedValue , setSelectedValue] = useState("")
    
    const handleChangeS = (e) => {
        
        setSelectedValue(e.target.value);
        onChangeS && onChangeS(e.target.value)
        console.log("Selected Sorting:", e.target.value);

    };


    return (
        <div className="fade-in TopFiltDiv grid grid-cols-12 text-gray-200 bg-[#556155] 
            px-6 py-4.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">

            {/* <!-- Left Chips Area --> */}
            <div className="filtChipsDiv col-span-9 flex items-center font-[Montserrat]">

                <div className="flex flex-row items-center text-[17px] space-x-2 pr-2">
                    <i className="fa-solid fa-bars text-[18px]"></i>
                    <p className="font-semibold tracking-tight">Filters Applied →</p>
                </div>

                {/* <!-- Chips sections --> */}
                
                {/* Category Chips */}
                {selectedCateg.map((cat, i) => (
                    <span key={i}
                    className="flex flex-row items-center text-[15px] bg-gray-200 text-black px-4 py-[6px] rounded-full gap-3 hover:cursor-pointer hover:bg-gray-300 transition">
                    
                    {cat}
                    <button onClick={() => onRemoveCategory(cat)}
                        className="flex flex-row justify-center items-center text-red-500 font-bold text-[22px] hover:cursor-pointer">×
                    </button>
                    
                    </span>
                ))}

                {/* Rating Chip */}
                {selectedRating && (
                    <span className="bg-yellow-200 text-black px-4 py-[6px] rounded-full text-[15px] flex items-center gap-3 hover:cursor-pointer hover:bg-yellow-300 transition">
                    
                    {selectedRating}★ & Up
                    <button onClick={onRemoveRating} className="text-red-500 font-bold text-[22px] hover:cursor-pointer">
                        ×
                    </button>

                    </span>
                )}

                {/* Price Range Chip */}
                {selectedRange.isApplied && (
                    <span className="flex items-center bg-green-200 text-black tracking-wide px-4 py-[6px] rounded-full text-[15px]  gap-3 hover:bg-green-300 transition">
                    
                    ${selectedRange.min} − ${selectedRange.max}
                    <button onClick={onRemoveRange} className="text-red-500 font-bold text-[22px] hover:cursor-pointer">
                        ×
                    </button>
                    
                    </span>
                )}

                {/* <!-- Clear All --> */}
                <div id="clearAllBtnDiv" className="ml-1"></div>

            </div>

            {/* <!-- Right Dropdowns --> */}
            <div className="dropdownsDiv col-span-3 flex justify-end items-center gap-4">

                {/* <!-- Items Per Page --> */}
                <div className="pgStDrpdwnDiv flex items-center gap-2 font-[Montserrat]">

                    <p className="font-semibold text-[14px] uppercase">Items</p>
                    <select onChange={handleChangeIPP} id="itmPrPgDropdown" className="border-2 border-gray-300 bg-[#556155] rounded-xl px-3 h-10 min-w-20 text-center font-medium hover:cursor-pointer transition-all duration-200 focus:ring-2 focus:ring-white">
                        <option disabled selected>9</option>
                        <option value="16">16</option>
                        <option value="12">12</option>
                        <option value="9">9</option>
                        <option value="6">6</option>
                        <option value="3">3</option>
                    </select>

                </div>

                {/* <!-- Sorting Dropdown --> */}
                <div className="sortDrpdwnDiv flex items-center">

                    <select onChange={handleChangeS} value={selectedValue}
                        id="sortDropdown" className="border-2 border-gray-300 bg-[#556155] rounded-xl px-4 h-10 w-48 text-center font-medium hover:cursor-pointer transition-all duration-200 focus:ring-2 focus:ring-white">
                        <option disabled selected>Sort Options</option>
                        <option value="ratLowToHigh">Rating Low → High</option>
                        <option value="ratHighToLow">Rating High → Low</option>
                        <option value="pricLowToHigh">Price Low → High</option>
                        <option value="pricHighToLow">Price High → Low</option>
                    </select>

                </div>

            </div>

        </div>
    )
}

export default FiltersChipsBar