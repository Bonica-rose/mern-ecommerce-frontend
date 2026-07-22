const PageLoader = ({ fullScreen = false, message = "Loading..." }) => {
  const wrapperStyle = fullScreen
    ? "fixed inset-0 bg-white flex flex-col justify-center items-center z-50"
    : "flex flex-col justify-center items-center p-8";

  return (
    <div className={wrapperStyle}>
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-500 font-medium">{message}</p>
    </div>
  );
};

export default PageLoader;
