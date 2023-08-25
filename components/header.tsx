import Link from "next/link";

export default function Header() {
  return (
    <div className="p-8 bg-cyan-400">
      <div className="flex justify-between text-white">
        {/* Replace the header with an icon or something? */}
        <Link href="/">Portfolio Home Page</Link>
        <header className="flex justify-end space-x-10">
          <Link href="/about-me">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/interests">Interests</Link>
          <span>Contact</span>
        </header>
      </div>
    </div>
  );
}
