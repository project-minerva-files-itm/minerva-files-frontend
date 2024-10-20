
import { Field, Form } from "react-final-form";
import { AuthUser } from "../../../../../models/auth_user";
import { useLoader, useValidation } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { AppButton } from "bm-react-lib";

interface LoginViewProps {
  name: string,
  data?: AuthUser,
  handlerSave: (authUser: AuthUser) => void
}

const LoginView: React.FC<LoginViewProps> = ({ data, handlerSave }) => {

  const loader = useLoader();

  const onSubmit = (authUser: AuthUser) => {
    handlerSave(authUser);
  }

  const { t } = useTranslation();
  const { validate } = useValidation<AuthUser>();
  const requiredFields: (keyof AuthUser)[] = ['password', 'email'];

  return (
    <Form
      initialValues={data}
      onSubmit={onSubmit}
      validate={(values) => validate(values, requiredFields)}
    >
      {({ handleSubmit }) => (
        <form name="frmOffice" onSubmit={handleSubmit}>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {/*<img
                alt="Your Company"
                src="https://www.electrohuila.com.co/wp-content/uploads/2024/07/cropped-logo-nuevo-eh.png.webp"
                className="mx-auto h-20 w-auto"
              />*/}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {t("logIn")}
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    {t("user")}
                  </label>
                  <div className="mt-2">
                    <Field name='email'>
                      {({ input, meta }) => (
                        <input
                          {...input}
                          id="email"
                          name="user"
                          type="email"
                          autoComplete="email"
                          className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      {t("password")}
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        {t("forgotPassword")}
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Field name='password'>
                      {({ input, meta }) => (
                        <input
                          {...input}
                          id="password"
                          name="password"
                          type="password"
                          className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                        />
                      )}
                    </Field>

                  </div>
                </div>

                <div>

                  <AppButton
                    context={loader}
                    text={t("login")}
                    className='flex w-full justify-center rounded-md app-bg-blue px-3 py-1.5  font-semibold leading-6 text-white shadow-sm hover:app-bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:app-bg-blue'
                    child={""}>
                  </AppButton>

                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Form>
  )
}


export default LoginView;