 function Comment({
  avatar,
  name,
  text,
  className = "",
}) {
  return (
    <div
      className={`bg-white shadow-xl p-4 rounded-xl flex items-center gap-3 w-72 ${className}`}
    >
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />

      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
}
export default Comment