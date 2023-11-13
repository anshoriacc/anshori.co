const NotFound = () => {
  return (
    <main className="p-6 flex-1 flex flex-col justify-center items-center">
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl md:text-4xl font-bold">404</h2>
        <span className="text-2xl md:text-4xl">|</span>
        <p>Could not find requested resource</p>
      </div>
    </main>
  );
};

export default NotFound;
