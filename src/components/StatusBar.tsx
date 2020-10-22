import * as React from "react";
import Users from "./Users";

export interface IStatusBarProps {
  userCount: number;
}

export default function StatusBar(props: IStatusBarProps) {
  return (
    <>
      <span className="font-weight-bolder">Онлайн ({props.userCount})</span>
      <Users />
    </>
  );
}
