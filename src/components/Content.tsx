import * as React from "react";
import { ChatState } from "../reducer";
import { Message } from "../types";
import Chat from "./Chat";
import StatusBar from "./StatusBar";

export interface IContentProps {
  content: ChatState;
  onAddMessage: (message: Message) => void;
}

export default function Content(props: IContentProps) {
  return (
    <>
      <div className="col-md-3  statusbar">
        <StatusBar users={props.content.users} />
      </div>
      <div className="col-md-auto shadow-sm p-3 chat">
        <Chat
          messages={props.content.messages}
          me={props.content.me}
          onAddMessage={props.onAddMessage}
        />
      </div>
    </>
  );
}
