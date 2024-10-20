import React from "react";
import { Field, Form } from "react-final-form";
import { useModal, useValidation, useLoader } from "@hooks/index";
import { AppButton, LayoutHeadModal, UILabel } from "bm-react-lib";
import {
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { FormType } from "../form/types/type_form";
import { FormProps } from "@apptypes/form_type";
import { useTranslation } from "react-i18next";

const FormUserUpdateView: React.FC<FormProps<FormType>> = ({
  title,
  name,
  data,
  handlerSave,
}) => {
  const loader = useLoader();
  const { closeModal } = useModal();
  const { t } = useTranslation();
  const onSubmit = (person: FormType) => handlerSave(person);

  const { validate } = useValidation<FormType>();
  const requiredFields: (keyof FormType)[] = ["phoneNumber", "firstName", "lastName"];

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

export default FormUserUpdateView;
