import { useNavigate } from "react-router-dom";
import { CreateButton } from "./CreateButton";
import { useState } from "react";

export const MainPageAfterLogin = () => {
  const [meetingLink, setMeetingLink] = useState("");
  const navigate = useNavigate();
  const handleJoinMeeting = () => {
    if (meetingLink.trim() === "") {
      alert("Please enter a valid meeting link");
      return;
    }
    navigate(`/room/${meetingLink}`);
  };
  const logoutFunc = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className="text-4xl font-bold mb-4 absolute top-0 mt-4">
          Welcome to InterviewUp
        </h1>
        <div className="border border-black rounded p-4">
          <div className="flex justify-center">Creating a new Room?</div>
          <div className="flex justify-center">
            <CreateButton />
          </div>
          <div className="mt-4 flex justify-center">Already have a ID?</div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter meeting ID ONLY"
              className="border border-gray-400 rounded py-2 px-4 mr-2"
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
            />
            <button
              className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleJoinMeeting}>
              Join Meeting
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
              onClick={logoutFunc}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
