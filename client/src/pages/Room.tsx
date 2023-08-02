import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoPlayer } from "../components/VideoPlayer";
import { RoomContext } from "../context/RoomContext";
import { LeaveMeeting } from "../components/LeaveMeeting";

import { OpenIDE } from "../components/OpenIDE";
export const Room = () => {
  const { id } = useParams();
  const { ws, me, peers, stream } = useContext(RoomContext);

  useEffect(() => {
    me?.on("open", () => {
      ws.emit("join-room", { roomId: id, peerId: me._id });
    });
  }, [id, me, ws]);

  return (
    <>
      <div className="border-4 border-rose-400 h-screen w-screen">
        <div className="ml-2 mt-2 ">
          Share this ID : <p>{id}</p> or this link :{" "}
          <p>http://localhost:3000/room/{id} </p> to someone who wants to join
          this meeting!
        </div>
        <div className="grid grid-cols-4 gap-4">
          <VideoPlayer
            className="border-4 border-rose-400 ml-4 mt-4"
            key={"me"}
            stream={stream}
          />
          {Object.values(peers).map((peer: any) => (
            <VideoPlayer
              key={peer.id}
              stream={peer.stream}
              className="border-4 border-rose-400 ml-4 mt-4"
            />
          ))}
        </div>
        <div className="fixed bottom-0 p-6 w-full flex justify-center border-t-2">
          <LeaveMeeting />
          <OpenIDE/>
          {/* <ChatButton onClick={toggleChat} /> */}
        </div>
      </div>
    </>
  );
};
