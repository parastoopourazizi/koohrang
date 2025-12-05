export default function Button({
  children,
  variant = "outline",   
  className = "",
  onClick,
  type = "button",
}) {
  const baseStyles =
    "px-6 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    outline:
      "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
    solid:
      "bg-green-700 text-white hover:bg-green-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}