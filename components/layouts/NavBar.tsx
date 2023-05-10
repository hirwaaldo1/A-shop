import { HEADER_LINK_2 } from "@/mocks/header";
import { useState } from "react";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="border-b border-tertiary hidden md:block">
      <div className="w-fit flex items-end gap-8 m-auto ">
        {HEADER_LINK_2.map((value) => (
          <div
            key={value.id}
            onClick={() => setActiveLink(value.id)}
            className="text-base py-5 relative w-fit flex items-center cursor-pointer overflow-hidden"
          >
            {value.name}
            <span
              className={`absolute w-full bg-blue-600 h-1 bottom-0 rounded-t transition-all delay-100 
              ${
                value.id === activeLink
                  ? "opacity-100 w-full h-1"
                  : "opacity-0 bg-transparent w-full h-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
