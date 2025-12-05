import React from "react";
import Koohrang from "../../assets/koohrang";
import Button from "../Button/Button";

const users = [
  {
    name: "کیوان احمدی",
    comment: "شیرش مزه شیرازی قدیمو می‌داد",
    avatar: "https://via.placeholder.com/40", 
    position: "top",
  },
  {
    name: "محمد طاها",
    comment: "یکی از بهترین محصولاتی که خوردم",
    avatar: "https://via.placeholder.com/40",
    position: "bottom",
  },
];

const FirstCart = () => {
  return (
    <>
   <div className="w-[90%] mx-auto mt-10">
      <section className="relative w-full h-[380px] bg-[#C9F6CE] rounded-2xl overflow-hidden">

        {/* کارت بالایی */}
        <div className="absolute top-12 left-16 bg-white shadow-lg p-4 rounded-xl flex items-center gap-3 w-72">
          <img
            src="https://via.placeholder.com/40"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">کیوان احمدی</p>
            <p className="text-xs text-gray-600">شیرش مزه شیرازی قدیمو می‌داد</p>
          </div>
        </div>

        {/* کارت پایینی */}
        <div className="absolute bottom-12 left-24 bg-white shadow-xl p-4 rounded-xl flex items-center gap-3 w-72">
          <img
            src="https://via.placeholder.com/40"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">محمد طاها</p>
            <p className="text-xs text-gray-600">یکی از بهترین محصولاتی که خوردم</p>
          </div>
        </div>

        {/* محتوای اصلی سمت راست */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-right">
          <Button>محصولات</Button>


          <h1 className="text-4xl font-bold text-green-800 mb-2">
            طعم ناب طبیعت
          </h1>

          <p className="text-gray-500 line-through mb-4">
            متن عنوان مناسب برای این بخش
          </p>

          <button className="px-6 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition">
            محصولات
          </button>
        </div>
      </section>
    </div>

    </>
    
  );
};

export default FirstCart ;
