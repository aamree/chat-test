import * as React from "react";
import { Message, User } from "../types";

export interface IMessageComponentProps {
  me: User;
  message: Message;
}

export default function MessageComponent(props: IMessageComponentProps) {
  let messageClass = "message";
  if (props.message.user.socketId === props.me.socketId) {
    messageClass += " me";
  } else {
    messageClass += " them";
  }
  return (
    <div className={messageClass}>
      <p className="message__text">{props.message.message}</p>
      <div className="font-italic text-muted message__user">
        {props.message.user.name}
      </div>
    </div>
  );
}
