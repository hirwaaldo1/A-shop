export default function Button({
  disabled = false,
  children,
}: {
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={disabled}
      className="bg-primary w-full py-3 text-white rounded-md font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
