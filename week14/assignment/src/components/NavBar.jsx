export default function NavBar() {
  return (
    <nav className="navbar">
      <img
        src="nat-logo-black.png"
        alt="Nate's Logo"
        className="logo"
        height={100}
      />
      <ul className="navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
}
