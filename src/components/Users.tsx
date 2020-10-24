import * as React from "react";
import { User } from "../types";

export interface IUsersProps {
  users: Array<User>;
}

export default function Users(props: IUsersProps) {
  return (
    <ul className="list-group mt-2 ">
      {props.users.map((user) => (
        <li className="list-group-item" key={user.socketId}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
