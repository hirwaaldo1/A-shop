const TextField = ({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      className="border border-tertiary-100 outline-none placeholder:text-tertiary bg-tertiary-200
      pt-2.5 pb-3 rounded w-full mb-6 placeholder:text-sm px-4
      "
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextField;
