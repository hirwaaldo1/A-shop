import Image from "next/image";

export default function Small({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  return (
    <div className="w-36 bg-[#e7e7e7] rounded-md p-2">
      <Image
        src={imageUrl}
        className="w-full h-full object-cover"
        alt={title}
        width={100}
        height={100}
      />
    </div>
  );
}
