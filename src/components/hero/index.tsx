import Navbar from "../navbar";
import bg1 from "../../assets/bg1.svg";

const Hero = () => {
  return (
    <div 
      className="bg-black min-h-[90vh] flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 18%, rgba(0, 0, 0, 1) 100%), url(${bg1})`, 
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sm:py-11">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center mx-auto mt-36 px-5 sm:px-10 md:px-16 lg:px-20 flex-grow text-center">
        <h1 className="font-choplinBold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Supplying Quality Goods for Your Business Needs</h1>
        <h3 className="py-4 text-lg sm:text-xl md:text-2xl font-light max-w-3xl">
          Offering a wide range of premium products at competitive prices.
        </h3>
      </div>
    </div>
  );
}

export default Hero;