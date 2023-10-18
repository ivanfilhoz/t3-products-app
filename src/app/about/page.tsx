import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          This is the <span className="text-[hsl(280,100%,70%)]">About</span> Page
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/"
          >
            <h3 className="text-2xl font-bold">Home →</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
