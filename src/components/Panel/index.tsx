import { useFormik } from "formik";

export type LoginPanelTypes = "register" | "login";

interface LoginPanelProps {
  panelType: LoginPanelTypes;
}

interface ErrorI {
  email: boolean;
  password: boolean;
}

export function LoginPanel({ panelType }: LoginPanelProps) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const { email, password } = values;
      let error: ErrorI = {
        email: false,
        password: false,
      };

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.email = true;
      } 

      if (password.length < 7) {
        error.password = true;
      };

      const errorFlags = Object.values(error);

      for (let flag of errorFlags) {
        if (flag) {
          return error;
        }
      }
      return undefined
    },
    onSubmit: (values, actions) => {      
      if (panelType === "login") {
        console.log(values, panelType);
      } else {
        console.log(values, panelType);
      }
    }
  })

  return (
    <div className="shadow-sm p-4 border border-1">
    <form onSubmit={formik.handleSubmit}  className="d-flex flex-column">
      <label htmlFor="" className="">
        <p>Email: </p>
        <input type="email" value={formik.values.email} name="email" onChange={formik.handleChange} />
      </label>
      <label htmlFor="">
        <p>Password: </p>
        <input type="password" value={formik.values.password} name="password" onChange={formik.handleChange} />
      </label>

      
      <button type="submit" className={formik.isValid ? "btn btn-outline-success" : "btn btn-outline-danger"}>
        { panelType === "register" ? "login" : 'register' }
      </button>

    </form>
    </div>
  );
}
