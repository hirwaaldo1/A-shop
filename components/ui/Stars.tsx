import { useState } from "react";
import { FiStar } from "react-icons/fi";

export default function Stars() {
  const [stars, setStars] = useState(0);
  return (
    <div className="flex gap-1 mt-3 items-center text-sm">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <FiStar
            onClick={() => setStars(index)}
            className={`
                cursor-pointer transition-all duration-500 ease-in-out
              ${
                stars >= index
                  ? "fill-yellow-500 text-yellow-500"
                  : "fill-[#d0d0d0] text-[#d0d0d0]"
              }
            `}
            key={index}
            size={18}
          />
        ))}
      <span className="ml-1">4.8</span>
      <span className="text-blue-700 ml-2">(92 Reviews)</span>
    </div>
  );
}
