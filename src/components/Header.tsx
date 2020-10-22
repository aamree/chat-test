import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className="d-flex justify-content-center py-5 header bg-gradient-secondary text-secondary">
      <h2>Chat AgynData</h2>
    </div>
  );
}
