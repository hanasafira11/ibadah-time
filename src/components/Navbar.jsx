import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">IbadahTime</div>

      <ul className="nav-menu">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/tracker">Tracker</NavLink></li>
        <li><NavLink to="/ensyclopedia">Ensiklopedia</NavLink></li>
        <li><NavLink to="/recommendation">Rekomendasi</NavLink></li>
        <li><NavLink to="/reflection">Refleksi</NavLink></li>
      </ul>
    </nav>
  );
}
