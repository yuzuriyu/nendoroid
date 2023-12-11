import lock from "../assets/lock.png";
import user from "../assets/user.png";
import google from "../assets/google.png";
import goBack from "../assets/go-back.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  console.log(auth?.currentUser?.email);

  const signUp = async () => {
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (err) {
        setError("Invalid email or password");
        console.log(err);
      }
    } else {
      setError("Invalid email or password");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Google sign-in failed");
    }
  };
  return (
    <div className="w-[366px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <Link to={"/"}>
        <img src={goBack} alt="go back" className="w-5 mb-10 cursor-pointer" />
      </Link>
      <div className="flex flex-col">
        <h1 className="text-4xl font-playfair">Create an Account</h1>
        <p className="text-sm pb-8">
          We're excited to have you join our community.
        </p>
        <div
          className={`flex items-center mb-4 bg-gray-100 py-2 rounded-lg ${
            error ? "border border-red-400" : ""
          }`}
        >
          <img src={user} alt="user icon" className="mx-2 w-5" />
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-100 text-xs flex-1 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="text-red-400 text-xs text-right">{error}</p>}

        <div
          className={`flex items-center mb-4 bg-gray-100 py-2 rounded-lg ${
            error ? "border border-red-400" : ""
          }`}
        >
          <img src={lock} alt="password icon" className="mx-2 w-5" />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-100 text-xs flex-1 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-400 text-xs text-right">{error}</p>}

        <div
          className={`flex items-center mb-4 bg-gray-100 py-2 rounded-lg ${
            error ? "border border-red-400" : ""
          }`}
        >
          <img src={lock} alt="password icon" className="mx-2 w-5" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-gray-100 text-xs flex-1 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-orange-400 text-white flex-1 py-3 rounded-lg text-xs hover:bg-orange-500 mb-4"
          onClick={() => signUp()}
        >
          Register
        </button>
        <div
          className="flex items-center justify-center mb-4 border-2 rounded-lg py-2 hover:border-black cursor-pointer"
          onClick={() => signInWithGoogle()}
        >
          <img src={google} alt="google icon" className="mr-2 w-5" />
          <p className="text-xs">
            Login with <span className="font-bold">Google</span>
          </p>
        </div>
        <p className="text-xs text-center">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-400">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
