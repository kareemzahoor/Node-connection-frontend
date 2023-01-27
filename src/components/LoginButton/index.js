import { useContext } from "react";
import { TestContext } from "../../context";

function LoginButton({ title }) {
  const data = useContext(TestContext);

  console.log("data", data);
  return (
    <div>
      <button onClick={() => data[1]("Ahmed")}>{title}</button>
    </div>
  );
}

export default LoginButton;
