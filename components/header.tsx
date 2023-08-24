export default function Header() {
  return (
    <div className="p-8 bg-cyan-400">
      <div className="flex justify-between text-white">
        {/* Replace the header with an icon or something? */}
        <h1>Portfolio Home Page</h1>
        <header className="flex justify-end space-x-10">
          <span>About Me</span>
          <span>Projects</span>
          <span>Experiences</span>
          <span>Interests</span>
          <span>Contact</span>
        </header>
      </div>
    </div>
  );
}
