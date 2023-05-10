import { HEADER_LINK_2 } from "@/mocks/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiTriangle } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import Container from "../wrappers/Container";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <div className="border-b border-tertiary hidden md:block">
        <div className="w-fit flex items-end gap-8 m-auto ">
          {HEADER_LINK_2.map((value) => (
            <Link
              href={value.link}
              key={value.id}
              className="font-medium py-5 text-sm relative w-fit flex items-center cursor-pointer overflow-hidden"
            >
              {value.name}
              <span
                className={`absolute w-full bg-blue-600 h-1 bottom-0 rounded-t transition-all delay-100 
              ${
                value.link === router.pathname
                  ? "opacity-100 w-full h-1"
                  : "opacity-0 bg-transparent w-full h-0"
              }`}
              />
            </Link>
          ))}
        </div>
      </div>
      <Container as="section">
        <SmallNavBar />
      </Container>
    </>
  );
}

function SmallNavBar() {
  return (
    <div className="flex gap-3 text-[15px] text-[#616874] items-center mt-5">
      <GoHome size={19} />
      <div className="flex gap-3 items-center">
        <FiTriangle size={8} className="rotate-90 fill-[#616874]" />
        <span>Home</span>
      </div>
      <div className="flex gap-3 items-center">
        <FiTriangle size={8} className="rotate-90 fill-[#616874]" />
        <span>Women</span>
      </div>
      <div className="flex gap-3 items-center">
        <FiTriangle size={8} className="rotate-90 fill-[#616874]" />
        <span>Gucci</span>
      </div>
      <div className="flex gap-3 items-center">
        <FiTriangle size={8} className="rotate-90 fill-[#616874]" />
        <span>Shoes</span>
      </div>
      <div className="flex gap-3 items-center">
        <FiTriangle size={8} className="rotate-90 fill-[#616874]" />
        <span className="text-black">Rhyton sneaker with 25</span>
      </div>
    </div>
  );
}
