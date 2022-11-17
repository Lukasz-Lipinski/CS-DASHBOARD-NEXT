import { useFormik } from 'formik';

export type LoginPanelTypes = 'signup' | 'signin';

interface LoginPanelProps {
  panelType: LoginPanelTypes;
}

interface ErrorI {
  email: boolean;
  password: boolean;
}

export function LoginPanel({
  panelType,
}: LoginPanelProps) {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate: (values) => {
      const { email, password } = values;
      let error: ErrorI = {
        email: false,
        password: false,
      };

      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          email
        )
      ) {
        error.email = true;
      }

      if (password.length < 7) {
        error.password = true;
      }

      const errorFlags = Object.values(error);

      for (let flag of errorFlags) {
        if (flag) {
          return error;
        }
      }
      return undefined;
    },
    onSubmit: (values, actions) => {
      if (panelType === 'signin') {
        console.log(values, panelType);
      } else {
        console.log(values, panelType);
      }
    },
  });

  return (
    <div className='shadow-sm p-5 border border-1 rounded'>
      <form
        onSubmit={formik.handleSubmit}
        className='d-flex flex-column gap-4'
      >
        <div className='form-floating'>
          <input
            className='form-control'
            type='email'
            id='inputEmail'
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
          />
          <label htmlFor='inputEmail'>
            Email:
          </label>
        </div>
        <div className='form-floating'>
          <input
            className='form-control'
            type='password'
            value={formik.values.password}
            name='password'
            onChange={formik.handleChange}
          />
          <label className=''>Password: </label>
        </div>

        <button
          type='submit'
          className={`
            mt-4
            ${
              formik.isValid
                ? 'btn btn-outline-success'
                : 'btn btn-outline-danger'
            }`}
        >
          {panelType}
        </button>
      </form>
    </div>
  );
}
