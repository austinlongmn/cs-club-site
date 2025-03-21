import Link from "next/link";

export default function Footer() {
  const linkStyles =
    "hover:text-white hover:font-bold transition-colors duration-500 ease-in-out";

  return (
    <footer className="flex w-screen flex-col items-center justify-center border-t border-gray-500 pt-10">
      <div className="flex gap-10 pb-10 text-gray-400">
        <Link href="/" className={linkStyles}>
          Home
        </Link>
        <Link href="/students" className={linkStyles}>
          Students
        </Link>
        <Link href="/competition-scores" className={linkStyles}>
          Competition Scores
        </Link>
      </div>
      <div className="flex pb-2 text-gray-400">
        <Link href="/oss-attributions" className={linkStyles}>
          OSS Attributions
        </Link>
      </div>
      <p className="flex text-gray-400">
        &copy; {new Date().getFullYear()} Computer Science Club - University of
        Northwestern-St. Paul
      </p>
    </footer>
  );
}
