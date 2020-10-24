import * as React from "react";
import { User } from "../types";
import Users from "./Users";

export interface IStatusBarProps {
  users: Array<User>;
}

export default function StatusBar(props: IStatusBarProps) {
  return (
    <>
      <span className="font-weight-bolder">Онлайн ({props.users.length})</span>
      <Users users={props.users} />
    </>
  );
}
