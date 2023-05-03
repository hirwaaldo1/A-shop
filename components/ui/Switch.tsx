import { useState } from "react";

export default function Switch() {
  const [isEnable, setIsEnable] = useState<boolean>(true);
  return (
    <div
      onClick={() => setIsEnable((prev: boolean) => !prev)}
      className={`bg-primary relative w-12 flex rounded-full h-6 p-0.5`}
    >
      <div
        className={`block h-5 w-5 absolute bg-white rounded-full delay-100 transition-all duration-100 ${
          isEnable ? "left-[26px]" : "left-0.5"
        }`}
      ></div>
    </div>
  );
}
