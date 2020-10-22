import * as React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
// import io from "socket.io-client";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const joined = false;
  return (
    <div className="container app">
      <div className="row header">
        <div className="col-12 shadow-sm">
          <Header />
        </div>
      </div>
      <div className="row mt-2 content">
        {joined ? <SignIn /> : <Content />}
      </div>
    </div>
  );
}
