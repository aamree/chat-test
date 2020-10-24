import * as React from "react";
import { Message, User } from "../types";
import MessageComponent from "./MessageComponent";

export interface IMessagesProps {
  messages: Array<Message>;
  me: User;
}

export default function Messages(props: IMessagesProps) {
  return (
    <>
      {props.messages.map((message, index) => (
        <MessageComponent me={props.me} message={message} key={index} />
      ))}
    </>
  );
}
