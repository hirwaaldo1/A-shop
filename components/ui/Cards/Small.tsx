import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function Small({ setWhichState, whichState, id }: any) {
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => setWhichState(id)}
        className={`relative flex items-center justify-center border rounded-md cursor-pointer  delay-100 transition-all bg-[#f0f0f0] ${
          whichState === id ? "border-primary" : "border-transparent"
        }`}
      >
        <Image
          className="w-full h-full object-cover"
          alt=""
          src={"/assets/fake.png"}
          width={400}
          height={400}
        />
        {whichState === id && (
          <FiCheck
            size={18}
            className="bg-primary p-[3px] text-white rounded-full absolute -bottom-2"
          />
        )}
      </div>
      <p
        className={`text-sm mt-2 delay-100 transition-all ${
          whichState === id ? "text-primary" : "text-[#616874]"
        }`}
      >
        Black
      </p>
    </div>
  );
}
