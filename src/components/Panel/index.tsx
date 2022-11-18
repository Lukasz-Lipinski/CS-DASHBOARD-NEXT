import { useFormik } from 'formik';
import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

export type LoginPanelTypes = 'signup' | 'signin';

interface LoginPanelProps {
  panelType: LoginPanelTypes;
  setUser: () => void;
}

interface ErrorI {
  email: boolean;
  password: boolean;
}

interface Req {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface Res {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export function LoginPanel({
  panelType,
}: LoginPanelProps) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate: (values) => {
      const { email, password } = values;
      let error: ErrorI = {
        email: false,
        password: false,
      };

      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
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
      const body: Req = {
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      };

      if (panelType === 'signin') {
        axios
          .post<Res>(
            process.env.NEXT_PUBLIC_SIGNIN!,
            body
          )
          .then((res) => {
            const { data } = res;
            fetch('api/auth', {
              method: 'POST',
              body: JSON.stringify(data),
            });

            router.push('/dashboard');
          })
          .catch((err: AxiosError<Res>) =>
            console.log(err.response?.data)
          );
      } else {
        axios
          .post<Res>(
            process.env.NEXT_PUBLIC_SIGNUP!,
            body
          )
          .then((res) => console.log(res.data))
          .catch((err: AxiosError<Res>) =>
            console.log(err.response?.data)
          );
      }
    },
  });

  const emailControlClass = useMemo(() => {
    return formik.errors.email
      ? 'is-invalid'
      : '';
  }, [formik.errors.email]);

  const passwordControlClass = useMemo(() => {
    return formik.errors.password
      ? 'is-invalid'
      : '';
  }, [formik.errors.password]);

  return (
    <div className='shadow p-5 border border- rounded'>
      <form
        onSubmit={formik.handleSubmit}
        className='d-flex flex-column gap-4'
      >
        <div className='form-floating'>
          <input
            className={`form-control ${emailControlClass}`}
            type='text'
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
            className={`form-control ${passwordControlClass}`}
            type='password'
            value={formik.values.password}
            name='password'
            onChange={formik.handleChange}
          />
          <label className=''>Password: </label>
        </div>

        <button
          type='submit'
          disabled={!formik.dirty}
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
