import * as React from "react";
import socket from "../socket";
import { Message, User } from "../types";

export interface IToolsProps {
  me: User;
  onAddMessage: (message: Message) => void;
}

export default function Tools(props: IToolsProps) {
  const [messageValue, setMessageValue] = React.useState("");

  const onSendMessage = () => {
    socket.emit("CHAT:NEW_MESSAGE", {
      user: props.me,
      text: messageValue,
    });
    props.onAddMessage({ user: props.me, message: messageValue });
    setMessageValue("");
  };

  return (
    <div className="row w-100">
      <div className="col-md-9">
        <textarea
          className="form-control"
          rows={3}
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
      </div>
      <div className="col-md-3 d-flex align-items-center justify-content-center">
        <div
          className="btn btn-block btn-outline-primary chat__btn"
          onClick={onSendMessage}
        >
          Отправить
        </div>
      </div>
    </div>
  );
}
