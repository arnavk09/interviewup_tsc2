import { Socket } from "socket.io";
import { v4 as uuidv4 } from "uuid";
const rooms: Record<string, string[]> = {};

interface IRoomParams {
  roomId: string;
  peerId: string;
}

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuidv4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
    console.log("User Created The Room");
  };
  const joinRoom = ({ roomId, peerId }: IRoomParams) => {
    if (rooms[roomId]) {
      console.log("User Joined The Room", roomId);
      rooms[roomId].push(peerId);
      socket.join(roomId);
      socket.to(roomId).emit("user-joined", { peerId });
      socket.emit("get-users", {
        roomId,
        participants: rooms[roomId],
      });
    }
    socket.on("disconnect", () => {
      console.log("User Disconnected", peerId);
      leaveroom({ roomId, peerId });
    });
  };
  const leaveroom = ({ roomId, peerId }: IRoomParams) => {
    if (rooms[roomId]) {
      console.log("User Left The Room", roomId);
      rooms[roomId] = rooms[roomId].filter((id) => id !== peerId);
      socket.leave(roomId);
      socket.to(roomId).emit("user-disconnected", peerId);
    }
  };
  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};

// Port in use? Kill the process by netstat -ano | findstr :8080 followed by taskkill /PID 8080 /F
