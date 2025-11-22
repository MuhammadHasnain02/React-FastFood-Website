
function HeroSect({ bannerUrl }) {
    return (
        <section 
            className="
                fade-in w-auto 
                h-40 sm:h-70 md:h-70 lg:h-85 xl:h-110
                bg-cover bg-no-repeat bg-center
                rounded-xl mx-auto shadow-lg
            "
            style={{ backgroundImage: `url(${bannerUrl})` }}
        ></section>
    )
}

export default HeroSect