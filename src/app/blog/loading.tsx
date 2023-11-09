const Loading: React.FC = () => {
  return (
    <section>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="py-4 border-b border-b-gray-700"
        >
          <div className="w-60 h-6 mb-1 rounded bg-gray-700 animate-pulse" />
          <div className="text-gray-500 flex items-center">
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
            <span className="mx-2">|</span>
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
            <span className="mx-2">|</span>
            <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Loading;
