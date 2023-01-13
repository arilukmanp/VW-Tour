export function CartDivider() {
  return (
    <div className="border-dashed border-b-2 my-6">
      <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -left-2" />
      <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -right-2" />
    </div>
  );
}
