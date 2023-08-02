import { IDEHome } from "./pages/IDEHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { RoomProvider } from "./context/RoomContext";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";
import { MainPageAfterLogin } from "./components/MainPageAfterLogin";
import { SignUp } from "./pages/SignUp";

function App() {
  console.log(
    "Be very careful with what you paste here. It can be dangerous. You have been warned."
  );
  return (
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/videocall" element={<MainPageAfterLogin />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/idehome" element={<IDEHome />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  );
}

export default App;
