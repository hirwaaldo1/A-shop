import { whichValiation } from "@/utils/validation";
import { FieldValues, UseFormRegister } from "react-hook-form";

const TextField = ({
  name,
  type,
  placeholder,
  register,
  errors,
}: {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
}) => {
  return (
    <>
      <input
        className={`border outline-none placeholder:text-tertiary bg-tertiary-200
        pt-2.5 pb-3 rounded w-full placeholder:text-sm px-4
        ${errors ? "border-red-500" : "border-tertiary-100"}
        `}
        type={type}
        placeholder={placeholder}
        {...register(name, whichValiation(name))}
      />
      <span role="alert" className="span--error">
        {errors}
      </span>
    </>
  );
};

export default TextField;
