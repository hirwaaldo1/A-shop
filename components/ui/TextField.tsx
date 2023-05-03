import { whichValiation } from "@/utils/validation";
import { FieldValues, UseFormRegister } from "react-hook-form";

const TextField = ({
  name,
  type,
  placeholder,
  register,
}: {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <input
      className="border border-tertiary-100 outline-none placeholder:text-tertiary bg-tertiary-200
      pt-2.5 pb-3 rounded w-full placeholder:text-sm px-4
      "
      type={type}
      placeholder={placeholder}
      {...register(name, whichValiation(name))}
    />
  );
};

export default TextField;
