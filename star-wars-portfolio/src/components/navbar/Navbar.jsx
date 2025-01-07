import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Star Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#about" className="navbar-link">About</a></li>
        <li><a href="#projects" className="navbar-link">Projects</a></li>
        <li><a href="#contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

