const IfNoPost = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          No Posts Available
        </h1>
        <p className="text-gray-600 mb-6">
          Currently, there are no posts to display.
        </p>
      </div>
    </div>
  );
};

export default IfNoPost;
