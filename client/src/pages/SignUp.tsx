import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    navigate("/");
    console.log("username", username);
    console.log("I won't log the password, just remember it or autosave it.");
    console.log("email", email);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="border-2 border-black p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Sign Up for InterviewUp</h1>
          <form className="flex flex-col items-center">
            <div className="mb-4">It's free, secure and easy to use.</div>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 border-black rounded-md p-1 mb-4 text-sm w-48"></input>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-black rounded-md p-1 mb-4 text-sm w-48"></input>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black rounded-md p-1 mb-4 text-sm w-48"></input>
            {username && password && email ? (
              <Link to={"/videocall"}>
                <button
                  className="bg-rose-400 p-2 rounded-lg text-sm hover:bg-rose-600 text-white w-48"
                  onClick={handleSubmit}>
                  Sign Up
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="bg-gray-400 p-2 rounded-lg text-sm hover:bg-gray-600 text-white w-48 cursor-not-allowed">
                Sign Up
              </button>
            )}
            <div className="mt-4">
              <Link to={"/"} className="text-blue-500 hover:text-blue-700">
                Already have an account? Click here to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
