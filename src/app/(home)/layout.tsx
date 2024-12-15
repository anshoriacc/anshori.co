import Header from "@/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-900 text-neutral-50">
      <div className="mx-auto min-h-[100dvh] w-full max-w-2xl p-4 pt-[88px]">
        <Header />

        {children}
      </div>
    </div>
  );
}
