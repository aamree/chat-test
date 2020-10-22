import * as React from "react";

export interface IToolsProps {}

export default function Tools(props: IToolsProps) {
  return (
    <div className="row w-100">
      <div className="col-md-9">
        <textarea className="form-control" rows={3} />
      </div>
      <div className="col-md-3 d-flex align-items-center justify-content-center">
        <div className="btn btn-block btn-outline-primary chat__btn">
          Отправить
        </div>
      </div>
    </div>
  );
}
