import React from "react";
import { Field, Form } from "react-final-form";
import { useModal, useValidation, useLoader } from "@hooks/index";
import { AppButton, LayoutForm, LayoutHeadModal, SelectDto, UILabel } from "bm-react-lib";
import {
  CheckCircleIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { FormType } from "./types/type_form";
import { FormProps } from "@apptypes/form_type";

import useGetTypeDocumentsState from "../../../../hooks/data/get_type_documents";
import Select, { SingleValue } from "react-select";
import { FormApi } from "final-form";
import { t } from "i18next";


const FormDocumentTypeView: React.FC<FormProps<FormType>> = ({
  title,
  name,
  data,
  handlerSave,
  isDeletable,
  handlerDelete,
}) => {

  const { documentData } = useGetTypeDocumentsState();

  const loader = useLoader();
  const { closeModal } = useModal();

  const onSubmit = (person: FormType) => handlerSave(person);

  const { validate } = useValidation<FormType>();
  const requiredFields: (keyof FormType)[] = ["Name", 'TypeDocument', 'Size', 'StartDate'];

  const handleDelete = () => {
    if (isDeletable && handlerDelete) {
      handlerDelete(data!);
    }
  };

  const onChangeTypeDocument = (option: SingleValue<SelectDto>, form: FormApi<FormType, Partial<FormType>>) => {
    form.change('TypeDocument', option?.value.toString());
  }

  return (
    <>
      <Form
        initialValues={data}
        onSubmit={onSubmit}
        validate={(values) => validate(values, requiredFields)}
      >
        {({ handleSubmit, form }) => {
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

                {isDeletable ? (
                  <span className="sm:ml-3">
                    <AppButton
                      context={loader}
                      text="Delete"
                      onClick={handleDelete}
                      className={"app-button-base"}
                      child={
                        <TrashIcon
                          aria-hidden="true"
                          className="app-icon-base text-red-600"
                        />
                      }
                    ></AppButton>
                  </span>
                ) : null}
              </LayoutHeadModal>

              <LayoutForm className="">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <UILabel htmlFor="Name" text={t("name")} />
                    <Field name="Name">
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

                  <div className="sm:col-span-1">
                    <UILabel htmlFor="TypeDocument" text={t("typeDocument")} />
                    <Field name="TypeDocument">
                      {({ input, meta }) => (
                        <>
                          <Select
                            options={documentData}
                            className={meta.error && meta.touched ? 'app-select-error' : 'app-select'}
                            onChange={(option) => onChangeTypeDocument(option, form)}
                          />
                          <input {...input} type="hidden" />
                        </>
                      )}
                    </Field>
                  </div>

                  <div className="sm:col-span-1">
                    <UILabel htmlFor="Size" text="Tamaño máximo del documento (kB)" />
                    <Field name="Size">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          type="number"
                          className={
                            meta.error && meta.touched ? "app-field-fail" : "app-field"
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <UILabel htmlFor="Link" text="Link" />
                    <Field name="Link">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          type="text"
                          className={
                            meta.error && meta.touched ? "app-field-fail" : "app-field"
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div>
                    <UILabel htmlFor="StartDate" text="Activar a partir de" />
                    <Field name="StartDate">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          type="date"
                          className={
                            meta.error && meta.touched ? "app-field-fail" : "app-field"
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div>
                    <UILabel htmlFor="EndDate" text="Desactivar a partir de" />
                    <Field name="EndDate">
                      {({ input, meta }) => (
                        <input
                          {...input}
                          type="date"
                          className={
                            meta.error && meta.touched ? "app-field-fail" : "app-field"
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div className="sm:col-span-2">
                    <UILabel htmlFor="Description" text="Description" />
                    <Field name="Description">
                      {({ input, meta }) => (
                        <textarea
                          {...input}
                          className={meta.error && meta.touched ? "app-field-fail" : "app-field"
                          }
                        />
                      )}
                    </Field>
                  </div>

                </div>
              </LayoutForm>
            </form>
          );
        }}
      </Form>

    </>
  );
};

export default FormDocumentTypeView;
