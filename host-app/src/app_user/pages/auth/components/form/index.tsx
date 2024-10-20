import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { useModal, useValidation, useLoader } from "@hooks/index";
import { AppButton, LayoutHeadModal, UILabel } from "bm-react-lib";
import {
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { FormType } from "./types/type_form";
import { FormProps } from "@apptypes/form_type";
import { useTranslation } from "react-i18next";
import FileUpload from "../file";

const FormUserView: React.FC<FormProps<FormType>> = ({
  title,
  name,
  data,
  handlerSave,
  handlerSaveWithBase64,
}) => {

  const [fileBase64, setFileBase64] = useState<string>('');
  const loader = useLoader();
  const { closeModal } = useModal();
  const { t } = useTranslation();
  const onSubmit = (person: FormType) => {
    handlerSave(person);
    handlerSaveWithBase64!(person, fileBase64 ?? "");
  }

  const { validate } = useValidation<FormType>();
  const requiredFields: (keyof FormType)[] = ["email", "phoneNumber", "firstName", "lastName", "password", "passwordConfirm"];

  const handleFileUpload = (base64String: string) => {
    setFileBase64(base64String);
  };

  return (
    <>

      <Form
        initialValues={data}
        onSubmit={onSubmit}
        validate={(values) => validate(values, requiredFields)}
      >
        {({ handleSubmit }) => {
          return (


            <form onSubmit={handleSubmit}>
              <LayoutHeadModal title={title}>
                <span className="sm:ml-3">
                  <AppButton
                    context={loader}
                    text={data ? "Update" : "Create"}
                    className="app-button-base"
                    child={
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="app-icon-base text-green-600"
                      />
                    }
                  ></AppButton>
                </span>

                <span className="sm:ml-3">
                  <AppButton
                    context={loader}
                    className="app-button-base"
                    text="Cancel"
                    onClick={() => closeModal(name)}
                    child={
                      <XCircleIcon
                        aria-hidden="true"
                        className="app-icon-base text-orange-400"
                      />
                    }
                  ></AppButton>
                </span>


              </LayoutHeadModal>

              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-5 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="firstName" text={t("name")} />
                      <Field name="firstName">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="text"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="lastName" text={t("lastName")} />
                      <Field name="lastName">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="text"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="phoneNumber" text={t("phone")} />
                      <Field name="phoneNumber">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="text"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="name" text={t("email")} />
                      <Field name="email">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="email"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="password" text={t("password")} />
                      <Field name="password">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="password"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="passwordConfirm" text={t("confirmPassword")} />
                      <Field name="passwordConfirm">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            type="password"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <UILabel htmlFor="password" text={t("photo")} />
                      <FileUpload onFileUpload={handleFileUpload}></FileUpload>
                      <Field name="photo">
                        {({ input, meta }) => (
                          <input
                            {...input}
                            value={fileBase64}
                            defaultValue={fileBase64}
                            type="hidden"
                            className={
                              meta.error && meta.touched
                                ? "app-field-fail"
                                : "app-field"
                            }
                          />
                        )}
                      </Field>
                    </div>

                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Form>
    </>
  );
};

export default FormUserView;
