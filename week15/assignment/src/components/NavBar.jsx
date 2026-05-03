import { Link } from "react-router-dom";

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
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/projects" className="navbar__link">
            Projects
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
