import { BiLoaderAlt } from "react-icons/bi";

function Loading({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <BiLoaderAlt className="h-8 w-8 animate-spin text-blue-600" />
      <p className="mt-3 text-sm text-gray-600">{text}</p>
    </div>
  );
}

export default Loading;
