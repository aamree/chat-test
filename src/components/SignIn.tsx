import * as React from "react";

export interface ISignInProps {
  onLogin: (userName: string) => void;
}

export default function SignIn(props: ISignInProps) {
  const [userName, setUserName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onEnter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName) {
      return alert("Неверные данные");
    }
    setIsLoading(true);
    props.onLogin(userName);
    setIsLoading(false);
  };

  return (
    <form className="w-100 text-center mt-5" onSubmit={(e) => onEnter(e)}>
      <div className="form-group row w-100 d-flex justify-content-center">
        <label htmlFor="inputUserName" className="col-md-2 col-form-label">
          Пользователь:
        </label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="inputUserName"
            placeholder="Ваше имя"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <button disabled={isLoading} type="submit" className="btn btn-primary">
        {isLoading ? "Вход..." : "Войти"}
      </button>
    </form>
  );
}
