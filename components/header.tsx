// Library/Module Imports
import Link from "next/link";

export default function Header() {
  return (
    <div className="p-8 bg-gray-800" id="top">
      <div className="flex justify-between text-white">
        {/* Replace the header with an icon or something? */}
        <Link href="/">Portfolio Home Page</Link>
        <header className="flex justify-end space-x-10">
          <Link href="/about-me">About Me</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/interests">Interests</Link>
          <Link href="/Eric_Chen_Resume.pdf" download="Eric_Chen_Resume.pdf">
            Resume Copy
          </Link>
        </header>
      </div>
    </div>
  );
}
