import * as React from "react";
import Message from "./Message";

export interface IMessagesProps {}

export default function Messages(props: IMessagesProps) {
  return (
    <>
      <Message />
      <div className="message me">
        <p className="message__text">Привет! Как дела?</p>
        <div className="font-italic text-muted message__user">user1</div>
      </div>
      <div className="message them">
        <p className="message__text">Привет! Как дела?</p>
        <div className="font-italic text-muted message__user">user1</div>
      </div>
      <div className="message me">
        <p className="message__text">
          Привет! Как дела?!!!!!Привет! Как дела?!!!!!Привет! Как дела?!!!!!
        </p>
        <div className="font-italic text-muted message__user">user1</div>
      </div>
    </>
  );
}
