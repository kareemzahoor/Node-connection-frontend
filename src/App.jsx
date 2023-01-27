// const DATA = "Ghous";

// function App() {
//   const email = "ghous@gmail.com";
//   const arr = ["ghous", "ahmed", "khan"];
//   return (
//     <div>
//       <h1>Hello World {DATA}</h1>
//       <ul>
//         {arr.map((v, i) => (
//           <li key={i}>{v}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import "./style.css";
// import IMAGE from "./assets/images/image.jpg";
// import { Button as MyButton } from "./components/Button";
// const theme = "orange";

// function Header() {
//   return <h2>Header</h2>;
// }

// const Footer = () => <h2>Footer</h2>;

// function App() {
//   return (
//     <div>
//       <Header />
//       <h1 className="heading">Hello World</h1>
//       <input style={{ backgroundColor: theme }} />
//       <h4 style={{ color: theme, fontSize: "40px" }}>Ghous Ahmed</h4>
//       <img src={IMAGE} alt="" />

//       <MyButton />

//       <Footer />
//     </div>
//   );
// }

// export default App;

// import "./style.css";
// import { Button } from "./components/Button";

// function App() {
//   const str = "Hello";
//   const clickMe = (a) => {
//     alert(a);
//   };
//   return (
//     <div>
//       <h1>Main</h1>
//       {/* <Button label="One" />
//       <Button label="Two" featured={true} />
//       <Button label="Three" />

//       <Button featured={true} /> */}

//       <Button clickKar={clickMe} str={str}>
//         <span>Click</span>
//       </Button>

//       <Button clickKar={(a) => alert(a)}>Ghous</Button>
//     </div>
//   );
// }

// import "./style.css";
// import { ThemeButton } from "./components/Button";
// import LoginForm from "./components/Login";
// import { getAuth, createUserWithEmailAndPassword } from "./config/firebase";

// function App() {
//   const login = (data) => {
//     const auth = getAuth();

//     createUserWithEmailAndPassword(auth, data.username, data.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("uyser===>", user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("error===>", errorMessage);
//         // ..
//       });
//   };
//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-12 col-sm-12 col-md-6 col-lg-6">
//           <LoginForm login={login} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import "./style.css";
// import { ThemeButton } from "./components/Button";
// import LoginForm from "./components/Login";
// import { getAuth, createUserWithEmailAndPassword } from "./config/firebase";
// import { useEffect, useRef } from "react";

// function App() {
// useEffect(() => {
//   console.log("Every render.....");
// });
// useEffect(() => {
//   console.log("Only on first render......");
// }, []);

// useEffect(() => {
//   console.log("First render");
//   console.log("When a or b change");
// }, [a, b]);

// useEffect(() => {
//   return () => console.log("When component destroy");
// }, []);

// const inputRef = useRef();
// const loginRef = useRef();

// return (
//   <div>
//     <h1>Hooks</h1>
//     <LoginForm />

// {
/* <input ref={inputRef} type="text" />

      <button onClick={() => console.log(inputRef.current.value)}>Get</button> */
// }
//     </div>
//   );
// }

// export default App;

// import "./style.css";
// import { ThemeButton } from "./components/Button";
// import LoginForm from "./components/Login";
// import { getAuth, createUserWithEmailAndPassword } from "./config/firebase";
// import { useEffect, useRef, useState, useMemo, useCallback } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     setTimer(counter);
//   }, [counter]);

//   const memoLogin = useCallback(() => <LoginForm />, []);

//   const abc = () => {
//     return <h1>Hello</h1>;
//   };

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <h1>Timer: {timer}</h1>

//       <ThemeButton onClick={() => setCounter((old) => old - 1)} title={"-"} />
//       <ThemeButton onClick={() => setCounter(counter + 1)} title={"+"} />
//       {abc()}
//     </div>
//   );
// }

import AppRouter from "./config/router";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
