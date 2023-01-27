import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
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
        <li>
          <a target="_blank" href="https://www.youtube.com">
            Youtube
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
