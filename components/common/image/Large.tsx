import { FiTriangle } from "react-icons/fi";
import Image from "next/image";

export default function Large({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  return (
    <div className="bg-[#e7e7e7] relative flex items-center justify-center flex-1 rounded-md">
      <div className="absolute flex justify-between w-full px-3">
        <FiTriangle className="bg-white rounded-md text-black fill-black w-10 h-10 px-3.5 cursor-pointer -rotate-90" />
        <FiTriangle className="bg-white rounded-md text-black fill-black w-10 h-10 px-3.5 cursor-pointer rotate-90" />
      </div>
      <Image src={imageUrl} alt={title} width={600} height={600} />
    </div>
  );
}
