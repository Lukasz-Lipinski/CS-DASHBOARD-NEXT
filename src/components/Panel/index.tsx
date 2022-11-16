export type LoginPanelTypes = "register" | "login";

interface LoginPanelProps {
  panelType: LoginPanelTypes;
}


export function LoginPanel({ panelType }: LoginPanelProps) {

  const onSubmit = () => { 
    if (panelType === "register") {
      //register
    } else {
      //signin user
    }
   }
  return (
    <form>
      <label htmlFor="">
        <p>Email: </p>
        <input type="email" />
      </label>
      <label htmlFor="">
        <p>Password: </p>
        <input type="password" />
      </label>

      <button type="submit">
        { panelType === "register" ? "login" : 'register' }
      </button>
    </form>
  );
}
