import * as React from "react";

export interface IMessageProps {}

export default function Message(props: IMessageProps) {
  return (
    <div className="message them">
      <p className="message__text">Привет! Как дела?</p>
      <div className="font-italic text-muted message__user">user1</div>
    </div>
  );
}
