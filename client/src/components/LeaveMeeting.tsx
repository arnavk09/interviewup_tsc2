import { Link } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
export const LeaveMeeting = () => {
  const { ws, me} = useContext(RoomContext);
  const leaveMeetingFunction = () => {
    alert("Leaving meeting. CLOSE TAB TO DISCONNECT.");
    ws.emit("user-disconnected", { peerId: me._id });
  };
  return (
    <>
      <div>
        <Link to={"/videocall"}>
          <button
            onClick={leaveMeetingFunction}
            className="bg-rose-400 p-4 rounded-lg text-xl hover:bg-rose-600 text-white"
            data-tip="Leave Meeting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};
