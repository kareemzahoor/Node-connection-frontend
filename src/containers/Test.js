import Header from "../components/Header";
import { TestContext } from "../context";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Test() {
  // const [name, setName] = useState("Ghous");
  // const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const userStore = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  return (
    <TestContext.Provider value={{ name: "ghous" }}>
      <div>
        {/* <h2>{userStore.counter}</h2>
        <button>-</button>
        <button
          onClick={() =>
            dispatch({ type: "counter", newValue: userStore.counter + 1 })
          }
        >
          +
        </button> */}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Todo"
        />
        <button onClick={() => dispatch({ type: "ADD", value })}>ADD</button>
        <button onClick={() => dispatch({ type: "DELETEALL" })}>
          Delete All
        </button>
        <ul>
          {userStore.todo.map((v, i) => (
            <li key={i}>
              {v}{" "}
              <button
                onClick={() =>
                  dispatch({ type: "EDIT", index: i, old_value: v })
                }
              >
                Edit
              </button>
              <button onClick={() => dispatch({ type: "DELETE", index: i })}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </TestContext.Provider>
  );
}

export default Test;
