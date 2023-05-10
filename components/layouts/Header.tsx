import { HEADER_LINK } from "@/mocks/header";
import Image from "next/image";
import { useState } from "react";
import {
  FiChevronDown,
  FiTriangle,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";
import { Badge } from "../ui";
import NavBar from "./NavBar";
import Wrapper from "../wrappers/DashboardWrapper";

export default function Header() {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <Wrapper as="div">
      <div className="bg-black text-white">
        <div className="max-w-screen-2xl flex justify-between items-center m-auto px-8 pt-3 pb-3">
          <div className="flex items-center gap-5">
            <div className="flex gap-1 items-center">
              <Image
                src={"/assets/logo.png"}
                className="cursor-pointer object-cover rounded-full border border-tertiary-300 w-6 h-6 "
                width={20}
                height={20}
                alt="country"
              />
              <FiChevronDown className="text-tertiary-300" size={16} />
            </div>
            <span className="w-[1px] h-6 bg-tertiary-300 hidden md:block" />
            <div className="hidden gap-10 md:flex">
              {HEADER_LINK.map((value) => (
                <div
                  key={value.id}
                  onClick={() => setActiveLink(value.id)}
                  className={`flex flex-col items-center gap-1 relative cursor-pointer active:text-white group delay-75 transition-all  ${
                    value.id === activeLink ? "text-white" : "text-tertiary-300"
                  }`}
                >
                  <span className="text-sm">{value.name}</span>
                  {activeLink === value.id && (
                    <FiTriangle
                      className="absolute -bottom-3 text-tertiary-300 fill-white"
                      size={8}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-xl font-bold">A-shop</h1>
          <div className="items-center gap-4  hidden md:flex">
            <div className="flex gap-2 items-center bg-[#252428] rounded-full px-3 py-2">
              <FiSearch size={16} className="text-tertiary-300" />
              <input
                type="search"
                className="bg-transparent outline-none max-w-[200px] text-sm"
                placeholder="Search..."
              />
            </div>
            <span className="w-[1px] h-6 bg-tertiary-300" />
            <Badge Icons={FiHeart} count={2} />
            <Badge Icons={FiShoppingBag} count={8} />
          </div>
          <FiMenu className="md:hidden" size={25} />
        </div>
      </div>
      <NavBar />
    </Wrapper>
  );
}
