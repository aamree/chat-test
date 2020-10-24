import * as React from "react";
import { Message, User } from "../types";
import Messages from "./Messages";
import Tools from "./Tools";

export interface IChatProps {
  messages: Array<Message>;
  me: User;
  onAddMessage: (message: Message) => void;
}

export default function Chat(props: IChatProps) {
  return (
    <>
      <div className="chat__messages bg-light mb-3 rounded-sm">
        <Messages messages={props.messages} me={props.me} />
      </div>
      <div className="chat__tools">
        <Tools me={props.me} onAddMessage={props.onAddMessage} />
      </div>
    </>
  );
}
