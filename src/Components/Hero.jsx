import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <section className=" md:grid grid-cols-2 gap-8  mb-[10rem]">
      <div className="">
        <h1 className="text-4xl font-semibold tracking-tight mb-3  md:text-6xl lg:tracking-tighter">
          We are changing the way people shop
        </h1>
        <p className="mb-7 text-lg mt-7 max-w-[24.5rem] text-left leading-7">
          Lorem ipsum, dolor sit amet consect adipisicing elit. Nam, dolor? Sed
          est tempora, ipsam maxime necessitatibus vitae eius aliquam sequi
          dolores labore, saepe neque voluptatum?
        </p>

        <Link className="btn btn-secondary mt-3 capitalize" to={"/products"}>
          our products
        </Link>
      </div>

      <div className=" hidden md:flex carousel w-full mt-3 rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero1} className="w-full h-[27rem]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-ghost">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={hero2} className="w-full h-[27rem]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-ghost">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={hero3} className="w-full h-[27rem]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-ghost">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-ghost">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={hero4} className="w-full h-[27rem]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-ghost">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-ghost">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
