import React from "react";
import Koohrang from "../../assets/koohrang";
import Button from "../Button/Button";
import Comment from "../Comments/Comments";



const FirstCart = () => {
  return (
    <>
   <div className="w-[90%] mx-auto mt-10">
      <section className="relative w-full h-[380px] bg-[#C9F6CE] rounded-2xl overflow-hidden">
  <div>
      <Comment
        avatar="koohrang\public\images\AHMADI.png"
        name="محمد طاها"
        text="یکی از بهترین محصولاتی که خوردم"
        className="absolute bottom-12 left-24"
      />

      <Comment
        avatar="koohrang\public\images\AHMADI.png"
        name="کیوان احمدی"
        text="شیرش مزه شیرازی قدیمو می‌داد"
        className="absolute top-12 left-80"
      />
    </div>

        
        <div className="absolute right-16 top-1/2 -translate-y-1/2 text-right">
        <img src="C:\Users\LOQ\Desktop\kohrang\koohrang\public\images\kooh.png"></img>
        
        
       


          <h1 className="text-4xl font-bold text-[#76C30D] mb-2">
            طعم ناب طبیعت
          </h1>

          <p className="text-gray-500  mb-4">
           زیر عنوان مناسب برای این بخش

          </p>

             <Button>محصولات</Button>
        </div>
      </section>
    </div>

    </>
    
  );
};

export default FirstCart ;
