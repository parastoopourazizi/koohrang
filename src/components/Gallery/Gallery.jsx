import React from "react";


import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";


 function Gallery() {
  
  return (
    
   <section className="w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-white py-20 px-6">
  <div className="flex w-full max-w-6xl gap-10 items-center" dir="ltr">

   
    <div className="flex w-full md:w-1/2 justify-start">
      
    </div>

   
    <div className="flex flex-col items-end w-full md:w-1/2 space-y-4">
      <TextBox
        title="  و اخبار"
        description="زیر عنوان مناسب برای این بخش"
      />
      <Button className="self-end mt-4">مشاهده گالری تصاویر</Button>
    </div>

  </div>
</section>


  );
}
export default Gallery