import LoginButton from "../LoginButton";

function Header({ title }) {
  return (
    <div>
      <h1>Header</h1>
      <LoginButton title={title} />
    </div>
  );
}

export default Header;
