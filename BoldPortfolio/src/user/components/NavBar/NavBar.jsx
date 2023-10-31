import styles from './NavBar.css'
import { Link } from 'react-router-dom';

export function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <img src="../../assets/LogoBold.png" alt="Logo Bold Studio" />
      <ul>
        <li onClick={() => scrollToSection("home")}>Bold Studio</li>
        <li onClick={() => scrollToSection("work")}>Work</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        <li><Link to="/login">Admin</Link></li>
      </ul>
    </nav>
  );
}