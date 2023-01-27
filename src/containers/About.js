import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  console.log("location", location.state);
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
