import * as React from "react";
import Messages from "./Messages";
import Tools from "./Tools";

export interface IChatProps {}

export default function Chat(props: IChatProps) {
  return (
    <>
      <div className="chat__messages bg-light mb-3 rounded-sm">
        <Messages />
      </div>
      <div className="chat__tools">
        <Tools />
      </div>
    </>
  );
}
