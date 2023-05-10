import Stars from "@/components/ui/Stars";
import { useState } from "react";
const Loremer =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

export default function RightProductSide() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
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
    </div>
  );
}
