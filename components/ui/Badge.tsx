import { IconType } from "react-icons";
import { FiWind } from "react-icons/fi";

export default function Badge({
  Icons,
  count,
}: {
  Icons: IconType;
  count: number;
}) {
  return (
    <div className="flex justify-center items-center rounded-full bg-neutral-800 p-3 relative">
      <Icons />
      {count > 0 && (
        <span className="absolute -top-1.5 bg-white rounded-full min-w-[16px] h-4 flex justify-center items-center text-xs text-black -right-0.5 pl-[1px]">
          {count}
        </span>
      )}
    </div>
  );
}
