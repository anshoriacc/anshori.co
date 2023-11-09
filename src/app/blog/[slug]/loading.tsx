const Loading: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div>
        <div className="w-60 h-9 mb-1 rounded bg-gray-700 animate-pulse" />
        <div className="text-gray-500 flex items-center">
          <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
          <span className="mx-2">|</span>
          <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
          <span className="mx-2">|</span>
          <div className="w-24 h-5 bg-gray-700 animate-pulse rounded" />
        </div>
      </div>

      {/* image */}
      <div className="mx-auto w-full max-w-[576px] h-[432px] rounded bg-gray-700 animate-pulse" />

      {/* content */}
      <div className="flex flex-col gap-1">
        <div className="w-full h-6 bg-gray-700 rounded animate-pulse" />
        <div className="w-full h-6 bg-gray-700 rounded animate-pulse" />
        <div className="w-full h-6 bg-gray-700 rounded animate-pulse" />
        <div className="w-20 h-6 bg-gray-700 rounded animate-pulse" />
      </div>
    </main>
  );
};

export default Loading;
