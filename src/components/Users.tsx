import * as React from "react";

export interface IUsersProps {}

export default function Users(props: IUsersProps) {
  return (
    <ul className="list-group mt-2 ">
      <li className="list-group-item">user1</li>
      <li className="list-group-item">user2</li>
      <li className="list-group-item">user3</li>
    </ul>
  );
}
