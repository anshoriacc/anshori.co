import Link from "next/link";

const Education = () => {
  return (
    <section className="mt-4 flex flex-col gap-2">
      {/* section title */}
      <Link href="#education" className="w-fit">
        <h2 className="h2-page text-2xl font-black" id="education">
          education.
        </h2>
      </Link>

      {/* education */}
      <div className="list relative">
        <div>
          <h3 className="font-bold">Computer Science, Bachelor Degree</h3>
          <h4>
            Universitas Brawijaya —{" "}
            <span className="font-normal italic text-gray-500">2023</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Education;
