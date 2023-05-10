import Meta from "@/components/meta";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Meta title="404:)" />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="max-w-md text-center">
          <Image
            src="/assets/notFound.png"
            alt="404"
            width={300}
            draggable={false}
            height={300}
            className="m-auto"
          />
          <h3 className="font-semibold text-xl mb-2">Page not found</h3>
          <p className="text-tertiary text-base mb-5">
            This page doesn{"'"}t exist or was removed or perhaps it was stolen.
          </p>
          <Link
            href="/"
            className="bg-primary py-3 px-5 text-white rounded-md font-semibold text-sm"
          >
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
