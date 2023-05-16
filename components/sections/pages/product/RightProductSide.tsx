import { Small as SmallCard } from "@/components/ui/Cards";
import Stars from "@/components/ui/Stars";
import { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
const Loremer =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

export default function RightProductSide() {
  const [showMore, setShowMore] = useState(false);
  const [whichState, setWhichState] = useState(0);
  return (
    <div className="my-auto w-full">
      <h4 className="font-semibold text-[15px] text-[#616874]">Gucci</h4>
      <h1 className="font-bold text-3xl text-black">Rhyton sneaker with 25</h1>
      <Stars />
      <p className="text-sm text-[#616874] mt-2">
        {Loremer.substring(showMore ? 0 : 350)}...{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Less" : "More"}
        </span>
      </p>
      <div className="flex gap-2 mt-4">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return (
              <SmallCard
                setWhichState={setWhichState}
                whichState={whichState}
                id={i}
                key={i}
              />
            );
          })}
      </div>
      <div className="flex justify-between my-3">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="text-sm">In Stock</span>
        </div>
        <p className="text-sm text-blue-600">Find store</p>
      </div>
      <button className="w-full py-2.5 text-white bg-blue-600 rounded-md text-base font-medium">
        $790
      </button>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="flex items-center justify-center border border-[#e3e2e1] gap-2 py-2.5 rounded-md cursor-pointer">
          <AiOutlineShareAlt size={17} />
          <span className="font-semibold text-sm">Share</span>
        </div>
        <div className="flex items-center justify-center border border-[#e3e2e1] gap-2 py-2.5 rounded-md cursor-pointer">
          <FiHeart size={17} />
          <span className="font-semibold text-sm">Share</span>
        </div>
      </div>
    </div>
  );
}
