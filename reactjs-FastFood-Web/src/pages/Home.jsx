import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import HeroSect from "../components/HeroSection";
import CitiesCards from "../components/CitiesCards";
import OurAchievemSect from "../components/OurAchievemSect";
import ReviewCardsSect from "../components/ReviewCardsSect";
import ExploreCateg from "../components/ExploreCateg";
import TopProducts from "../components/TopProducts";

function App() {

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

    <section className="flex flex-col h-screen justify-between">
      {/* <!-- ================= Navbar Section ================= --> */}
      <Navbar />

      {/* <!-- ================= Middele Section ================= --> */}

      <section className="mx-5 sm:mx-12 md:mx-16 lg:mx-23 xl:mx-32 2xl:mx-36 mt-50 mb-35">
        
        {/* Burger Add */}
        <HeroSect bannerUrl="product-images/banner1.jpg" />

        <hr id="collectionPageSect" className="my-20 text-gray-300" />

        {/* <!-- ================= Explore Categories ================= --> */}

        <ExploreCateg />

        <hr id="cityCardSect" className="my-20 text-gray-300" />

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

  );
}

export default App;