import React from 'react'
function ProductCart({ products }) { 
  return (
    <div className="flex space-x-4">
      {products.map((product, i) => (
        <div
          key={i}
          className="bg-white w-60 rounded-2xl shadow-lg p-4 flex flex-col gap-3"
        >
          <img
            src={product.img}
            alt={product.title || `card-${i}`}
            className="w-full h-36 object-cover rounded-xl"
          />
          <span className="text-gray-400 text-sm">{product.date}</span>
          <h3 className="font-semibold text-lg text-gray-700">{product.title}</h3>
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <span>ادامه مطلب</span>
            <div className="flex gap-3 text-lg">
              <span>♡</span>
              <span>↻</span>
              <span>↗</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCart;
