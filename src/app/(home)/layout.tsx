// import { Header } from "@/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-800 text-neutral-50 cursor-default">
      <div className="mx-auto min-h-dvh w-full max-w-2xl p-4 pt-[88px]">
        {/* <Header /> */}

        {children}
      </div>
    </div>
  );
}
