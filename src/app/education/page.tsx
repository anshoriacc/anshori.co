const EducationPage: React.FC = () => {
  return (
    <main className="p-6 flex-1 flex flex-col gap-4">
      {/* title */}
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-500">
          The places where I took my academic degree.
        </h2>
      </div>

      {/* content */}
      <div className="list relative">
        <div>
          <h3 className="font-bold">Computer Science, Bachelor Degree</h3>
          <h4>
            Universitas Brawijaya —{" "}
            <span className="font-normal italic text-gray-500">2023</span>
          </h4>
        </div>
      </div>
    </main>
  );
};

export default EducationPage;
