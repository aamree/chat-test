import * as React from "react";

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  return (
    <form className="w-100 text-center mt-5">
      <div className="form-group row w-100 d-flex justify-content-center">
        <label htmlFor="inputUserName" className="col-md-2 col-form-label">
          Пользователь:
        </label>
        <div className="col-md-4">
          <input type="text" className="form-control" id="inputUserName" />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
    </form>
  );
}
