import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeButton } from "../components/Button";
import {
  signInWithPopup,
  facebook_provider,
  google_provider,
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "../config/firebase";
import GoogleMap from "../components/GoogleMap";

function Home() {
  const navigate = useNavigate();
  const loginWithFacebook = () => {
    const auth = getAuth();
    signInWithPopup(auth, facebook_provider)
      .then((result) => {
        const user = result.user;
        console.log("user====>", user);
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log("err=>", errorMessage);
        // ...
      });
  };
  const loginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, google_provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("user---->", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("errorMessage---->", errorMessage);
      });
  };

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => {
  //       console.log("res", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);
  return (
    <div>
      <h1>Home</h1>
      <ThemeButton
        onClick={loginWithFacebook}
        title={"LOGIN WITH FACEBOOK"}
      ></ThemeButton>
      <ThemeButton
        onClick={loginWithGoogle}
        title={"LOGIN WITH GOOGLE"}
      ></ThemeButton>
      {/* <ThemeButton
        title="LOGIN WITH FACEBOOK"
        onClick={() =>
          navigate("/about", {
            state: {
              name: "Ghous",
              email: "ghous@gmail.com",
              phone: 3242103067,
            },
          })
        }
      ></ThemeButton> */}
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
      <GoogleMap />
    </div>
  );
}

export default Home;
