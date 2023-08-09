const Loader = ({ className }) => {
  return (
    <div className={`flex justify-center items-center h-screen ${className}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-700"></div>
    </div>
  );
};

export default Loader;
