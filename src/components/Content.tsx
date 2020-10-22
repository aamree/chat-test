import * as React from "react";
import Chat from "./Chat";
import StatusBar from "./StatusBar";

export interface IContentProps {}

export default function Content(props: IContentProps) {
  return (
    <>
      <div className="col-md-3  statusbar">
        <StatusBar userCount={3} />
      </div>
      <div className="col-md-auto shadow-sm p-3 chat">
        <Chat />
      </div>
    </>
  );
}
