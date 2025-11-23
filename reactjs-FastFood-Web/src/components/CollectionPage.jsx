import CategoryFilter from "./CategoryFilter"
import Pagination from "./Pagination"
import PriceRange from "./PriceRange"
import Products from "./Products"
import Rating from "./Rating"
import FiltersChipsBar from './FiltersChipsBar';
import { getVisibleProducts } from "../data/product-filters"
import { priceRange } from "../data/price-range-filter"
import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

function CollectionPage() {

    const [ selectedCateg   , setSelectedCateg   ] = useState([])
    const [ selectedRating  , setSelectedRating  ] = useState(null);
    const [ selectedRange   , setSelectedRange   ] = useState({ min: priceRange.min, max: priceRange.max, isApplied: false });
    const [ selectedSorting , setSelectedSorting ] = useState("");
    const [ searchInp       , setSearchInp       ] = useState("");
    const [ currentPage     , setCurrentPage     ] = useState(1);
    const [ itemsPerPage    , setItemsPerPage    ] = useState(9);

    // Handle Category Change
    const handleCategChange = (category , isChecked) => {
        
        if (isChecked) {
        setSelectedCateg([...selectedCateg , category])
        }
        else {
        setSelectedCateg(
            selectedCateg.filter((categ) => categ !== category)
        )
        }
        
        setCurrentPage(1)
    }

    // Handle Rating Filter
    const handleRatingFilter = (rat) => {
        setSelectedRating(rat); // null bhi set ho jayega toggle par
    };

    // Handle Rating Filter
    const handleRangeFilter = (value) => {
        setSelectedRange({ ...selectedRange, max: value, isApplied: true });
    }

    // Handle Sorting Change
    const handleSortingChange = (value) => {
        setSelectedSorting(value);
    };

    // Handle Search Input
    const handleSearchInp = (value) => {
        setSearchInp(value);
    };

    const filteredProd = getVisibleProducts( selectedCateg , selectedRating , selectedRange , selectedSorting , searchInp )

    // Pagination logic
    const totalItems = filteredProd.length;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    const currentItems = filteredProd.slice(indexOfFirst, indexOfLast);


    // ======================= Navigation btn =======================

    let homeBtn = document.querySelectorAll(".homeBtn")
    let collectionBtn = document.querySelectorAll(".collectionBtn")
    let citiesBtn = document.querySelectorAll(".citiesBtn")
    let reviewsBtn = document.querySelectorAll(".reviewsBtn")
    let aboutBtn = document.querySelectorAll(".aboutBtn")

    homeBtn.forEach(btn => {

        btn.addEventListener("click" , () => {
        document.getElementById("homeSect").scrollIntoView({ top: 0, behavior: "smooth" });
        })

    })

    collectionBtn.forEach(btn => {
        
        btn.addEventListener("click" , () => {
        document.getElementById("collectionPageSect").scrollIntoView({ top: 0, behavior: "smooth" });
        })

    })

    citiesBtn.forEach(btn => {
        
        btn.addEventListener("click" , () => {
        document.getElementById("cityCardSect").scrollIntoView({ top: 0, behavior: "smooth" });
        })

    })

    reviewsBtn.forEach(btn => {
        
        btn.addEventListener("click" , () => {
        document.getElementById("reviewsCardSect").scrollIntoView({ top: 0, behavior: "smooth" });
        })

    })

    aboutBtn.forEach(btn => {
        
        btn.addEventListener("click" , () => {
        document.getElementById("aboutSect").scrollIntoView({ top: 0, behavior: "smooth" });
        })

    })

    return (

        <section>
            <Navbar onChange={handleSearchInp} />

            <div className="mt-35">
            
                <FiltersChipsBar
                    onChangeIPP={setItemsPerPage} onChangeS={handleSortingChange}
                    selectedCateg={selectedCateg} selectedRating={selectedRating} selectedRange={selectedRange}
                    onRemoveCategory={(cat) => handleCategChange(cat, false)} onRemoveRating={() => setSelectedRating(null)}
                    onRemoveRange={() => setSelectedRange({ min: priceRange.min, max: priceRange.max, isApplied: false })}
                />

                <div className="grid grid-cols-12 my-3 mt-10">

                    <div className="sticky top-36 col-span-2 border h-130 rounded-lg border-gray-300 bg-white">

                    <CategoryFilter selectedCategories={selectedCateg}
                    onChangeCategory={handleCategChange}/>

                    <PriceRange min={priceRange.min} max={priceRange.max} 
                    onChange={handleRangeFilter} />
                    
                    <Rating onFilter={handleRatingFilter} />

                    </div>

                    <div className="col-span-10">

                    <Products products={currentItems} />
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={ (pageNum) => setCurrentPage(pageNum) }
                    />
                    
                    </div>
                    
                </div>

            </div>

            <Footer />
        </section>


    )
}

export default CollectionPage