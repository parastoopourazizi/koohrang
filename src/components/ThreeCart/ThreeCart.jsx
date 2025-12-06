import React from "react";
import Button from "../Button/Button";
import ProductCart from "./ProductCart";

const productsData = [
  { img: "/img1.jpg", date: "2025-12-06", title: "محصول 1" },
  { img: "/img2.jpg", date: "2025-12-05", title: "محصول 2" },
  { img: "/img3.jpg", date: "2025-12-04", title: "محصول 3" },
];
 function ThreeCart() {
  
  return (
    
    <section className="flex items-center justify-between p-6">
 <ProductCart  products={productsData} />;




<div className="flex flex-col gap-4 order-1 md:order-2 text-right pr-4">
<h2 className="text-3xl font-bold text-gray-800">آخرین مقالات و اخبار</h2>
<p className="text-gray-600 text-base">زیر عنوان مناسب برای این بخش</p>
<Button>اخبار</Button>
</div>

</section>
  );
}
export default ThreeCart