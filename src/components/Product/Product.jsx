import React from "react";
import poloImage from "../../assets/sampleProduct.png";

const Product = () => {
  return (
    <div className="flex justify-center mt-28 bg-white rounded-xl shadow-xl p-5 border border-zinc-200">
      <div>
        <img className="w-56 object-cover h-auto" src={poloImage} />
      </div>
      <div>
        <h1 className="text-[1.3rem] font-bold">Awesome Polo</h1>
        <h3 className="text-[0.9rem]">
          Size:{" "}
          <span className="font-medium text-[1rem] text-pink">Medium</span>
        </h3>
        <h2 className="font-bold text-[1.2rem] text-pink mt-2">₱250.00</h2>
        <button className="mt-12 bg-blue text-white px-3 py-1 rounded-md border-b border-b-slate-900">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Product;
