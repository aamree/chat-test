import * as React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

import reducer, { initialState } from "./reducer";
import socket from "./socket";
import { JOINED, Message, NEW_MESSAGE, SET_USERS, User } from "./types";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onLogin = async (userName: string) => {
    socket.emit("CHAT:JOIN", userName);
    socket.on("CHAT:JOIN_RESPONSE", function (me: User, users: Array<User>) {
      dispatch({
        type: JOINED,
        payload: { me, users },
      });
    });
  };

  const setUsers = (users: Array<User>) => {
    dispatch({
      type: SET_USERS,
      payload: {
        users,
      },
    });
  };

  const addMessage = (message: Message) => {
    dispatch({
      type: NEW_MESSAGE,
      payload: {
        message,
      },
    });
  };

  React.useEffect(() => {
    socket.on("CHAT:SET_USERS", setUsers);
    socket.on("CHAT:NEW_MESSAGE", addMessage);
  }, []);

  return (
    <div className="container app">
      <div className="row header">
        <div className="col-12 shadow-sm">
          <Header />
        </div>
      </div>
      <div className="row mt-2 content">
        {!state.joined ? (
          <SignIn onLogin={onLogin} />
        ) : (
          <Content content={state} onAddMessage={addMessage} />
        )}
      </div>
    </div>
  );
}
