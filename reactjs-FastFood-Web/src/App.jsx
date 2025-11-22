import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CategoryFilter from "./components/CategoryFilter";
import Rating from "./components/Rating";
import PriceRange from "./components/PriceRange";
import { priceRange } from "./data/price-range-filter";
import {getVisibleProducts} from "./data/product-filters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
// import SelectSorting from "./components/SelectSorting";
// import ItemPerPage from "./components/ItemPerPage";
// import FiltersChips from "./components/FiltersChips";
import HeroSect from "./components/HeroSection";
// import FiltersChipsBar from "./components/FiltersChipsBar";
import CitiesCards from "./components/CitiesCards";
import OurAchievemSect from "./components/OurAchievemSect";
import ReviewCardsSect from "./components/ReviewCardsSect";
import ExploreCateg from "./components/ExploreCateg";
import TopProducts from "./components/TopProducts";
// import { Routes } from "react-router-dom";


function App() {

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

    // <Routes>

      <section className="flex flex-col h-screen justify-between">
        {/* <!-- ================= Navbar Section ================= --> */}
        <Navbar onChange={handleSearchInp} />

        {/* <!-- ================= Middele Section ================= --> */}

        <section className="mx-5 sm:mx-12 md:mx-16 lg:mx-23 xl:mx-32 2xl:mx-36 mt-50 mb-35">
          
          {/* Burger Add */}
          <HeroSect bannerUrl="product-images/banner1.jpg" />

          <hr id="collectionPageSect" className="my-20 text-gray-300" />

          {/* <!-- ================= Explore Categories ================= --> */}

          <ExploreCateg />

          <hr id="cityCardSect" className="my-20 text-gray-300" />

          {/* <!-- ================= Collection Section ================= --> */}

          {/* <FiltersChipsBar
            onChangeIPP={setItemsPerPage} onChangeS={handleSortingChange}
            selectedCateg={selectedCateg} selectedRating={selectedRating} selectedRange={selectedRange}
            onRemoveCategory={(cat) => handleCategChange(cat, false)} onRemoveRating={() => setSelectedRating(null)}
            onRemoveRange={() => setSelectedRange({ min: priceRange.min, max: priceRange.max, isApplied: false })}
          /> */}

          {/* <div className="-mx-32 grid grid-cols-12 my-3 mt-10">

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
            
          </div> */}

          {/* <!-- ================= Top Products ================= --> */}
          <TopProducts />

          <hr id="cityCardSect" className="my-20 text-gray-300" />

          {/* Pizza Add */}
          <HeroSect bannerUrl="product-images/banner2.jpg" />

          <hr id="cityCardSect" className="my-20 text-gray-300" />

          {/* <!-- =================== Cities Cards ==================== --> */}
          <CitiesCards />

          <hr className="my-20 text-gray-300" />

          {/* <!-- ================ Our Achievements Section ================== --> */}
          <OurAchievemSect />

          <hr id="reviewsCardSect" className="my-20 text-gray-300" />

          {/* Shawarma Add */}
          <HeroSect bannerUrl="product-images/banner3.jpg" />

          <hr id="cityCardSect" className="my-20 text-gray-300" />

          {/* <!-- =================== Review Cards ==================== --> */}
          <ReviewCardsSect />

        </section>

        {/* <!-- ================= FOOTER ================= --> */}
        <Footer />

      </section>

    // </Routes>

  );
}

export default App;