import React from "react";
import { ArrowBigRightDash, ArrowBigLeftDash } from "lucide-react";
import Header from "../../components/Header/Header";
import "./home.css";
const Home = () => {
  return (
    <div className="w-[80%] mx-auto ">
      <Header />
      <div className="mt-4 outline-2 outline-double outline-offset-2 flex flex-row justify-center items-center">
        <div className="w-[50%] flex flex-col justify-items-center items-center">
          <p className="text-sm text-[#BFBBA9] italic">OUR BESTSELLERS</p>
          <h1 className="text-2xl font-bold uppercase">Welcome to my store</h1>
          <p className="text-sm text-[#BFBBA9] italic">SHOP NOW</p>
        </div>
        <div className="w-[50%]">
          <img src="/slider.jpg" />
        </div>
      </div>
      <div className="mt-10 py-2 px-3">
        <div className="flex flex-col justify-items-center items-center gap-3">
          <h1 className="text-2xl font-bold font-stretch-extra-condensed uppercase">
            <span>Các loại quần áo</span>
          </h1>
          <div className="flex flex-row justify-items-center item-center gap-2">
            <ArrowBigRightDash />
            <p>
              Shop chúng tôi có đa dạng các loại quần áo cho bạn lựa chọn thỏa
              thích
            </p>
            <ArrowBigLeftDash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
