import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { IMessage } from "../../types/chat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

export const Chat: React.FC = ({}) => {
    const { chat } = useContext(RoomContext);
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="messagesList">
                {chat.messages.map((message: IMessage) => (
                    <ChatBubble message={message} />
                ))}
            </div>
            <ChatInput />
        </div>
    );
};