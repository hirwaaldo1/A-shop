import Image from "next/image";
import Link from "next/link";

const LeftSide = () => {
  return (
    <div className="relative bg-primary h-full pt-10">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="A-shop"
            width={40}
            height={40}
            className="ml-10"
          />
        </Link>
        <Image
          src="/assets/shop-one.png"
          alt="shop"
          width={1004}
          height={944}
          draggable={false}
          className="absolute bottom-0 -right-11"
        />
      </div>
    </div>
  );
};

export default LeftSide;
