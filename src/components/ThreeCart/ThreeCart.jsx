import React from "react";

import ProductCart from "./ProductCart";
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";

const productsData = [
  { img: "/img1.jpg", date: "2025-12-06", title: "محصول 1" },
  { img: "/img2.jpg", date: "2025-12-05", title: "محصول 2" },
  { img: "/img3.jpg", date: "2025-12-04", title: "محصول 3" },
];
 function ThreeCart() {
  
  return (
    
    <section className="w-full flex items-center justify-center bg-gradient-to-br from-green-100 to-white py-20 px-6">
        <div className="flex w-full max-w-6xl items-start justify-between">
            
            <div className="flex space-x-4">
                             <ProductCart  products={productsData} />;


            </div>



<div className="flex flex-col items-end space-y-4">
    <TextBox
 title=" آخرین مقالات و اخبار"
  description="زیر عنوان مناسب برای این بخش "
  
/>
<Button>اخبار</Button>
    
</div>

        </div>


</section>
  );
}
export default ThreeCart