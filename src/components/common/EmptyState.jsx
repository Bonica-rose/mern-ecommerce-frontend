import { BiSearch } from "react-icons/bi";

const EmptyState = ({
  title = "Nothing Found",
  message = "There is nothing to display.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <BiSearch size={24} className="h-12 w-12 text-gray-400" />

      <h2 className="mt-4 text-lg font-semibold">{title}</h2>

      <p className="mt-2 text-sm text-gray-500 text-center">{message}</p>
    </div>
  );
};

export default EmptyState;
