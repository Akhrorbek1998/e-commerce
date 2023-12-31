// import image
import WomanImg from "../img/woman_hero.png";

// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-500 relative -top-6 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 ">
            AUTUMN SALE STYLISH <br />
            <span>WOMENS</span>
          </h1>
          <Link
            className="self-start uppercase font-semibold border-b-2 border-primary"
            to={"/"}
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div>
          <img className="hidden lg:block" src={WomanImg} alt="women img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
