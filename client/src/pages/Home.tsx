import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface HomeProps {}
export const Home: FC<HomeProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      navigate("/videocall");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <>
      <div className="title">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl">
          Welcome to InterviewUp!
        </h1>
      </div>
      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="border-2 border-black p-4 rounded-md">
          <h2 className="text-xl font-bold mb-4 text-center">Log In</h2>
          <form className="flex flex-col items-center">
            <input
              type="text"
              placeholder="username"
              className="border-2 border-black rounded-md p-2 mb-4"
              onChange={(e) => setUsername(e.target.value)}></input>
            <input
              type="password"
              placeholder="password"
              className="border-2 border-black rounded-md p-2 mb-4"
              onChange={(e) => setPassword(e.target.value)}></input>
            <button
              onClick={handleLogin}
              className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
            <div className="mt-4">
              <Link
                to={"/signup"}
                className="text-blue-500 hover:text-blue-700">
                Don't have an account? Sign up for InterviewUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
