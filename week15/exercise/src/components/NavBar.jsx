import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/fiction">
              Fiction
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/history">
              History
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/strategy">
              Strategy
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
