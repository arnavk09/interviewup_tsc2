import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
export const CreateButton: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <>
      <div>
        <button
          onClick={createRoom}
          className="bg-rose-400 py-2 px-2 rounded-lg text-xl hover:bg-rose-500 text-white">
          Start New Meeting
        </button>
      </div>
    </>
  );
};
