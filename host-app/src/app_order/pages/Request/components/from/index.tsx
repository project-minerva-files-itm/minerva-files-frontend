import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { useModal, useValidation, useLoader } from "@hooks/index";
import { AppButton, LayoutHeadModal, UILabel } from "bm-react-lib";
import {
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { FormRequest } from "./types/request_form";
import { FormProps } from "@apptypes/form_type";
import { useTranslation } from "react-i18next";
import FileUpload from "../file";

const FormRequestView: React.FC<FormProps<FormRequest>> = ({

  data,
  handlerSave,
  handlerSaveWithBase64,
}) => {

  const [fileBase64, setFileBase64] = useState<string>('');
  const loader = useLoader();
  const { closeModal } = useModal();
  const { t } = useTranslation();
  const onSubmit = (person: FormRequest) => {
    handlerSave(person);
    handlerSaveWithBase64!(person, fileBase64 ?? "");
  }

  const { validate } = useValidation<FormRequest>();
  const requiredFields: (keyof FormRequest)[] = ["email", "phoneNumber", "firstName", "lastName", "subject", "description", "requestTypeId"];

  const handleFileUpload = (base64String: string) => {
    setFileBase64(base64String);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Radicación de correspondencia
        </h1>
        <Form
          initialValues={data}
          onSubmit={onSubmit}
          validate={(values) => validate(values, requiredFields)}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* Campos del formulario */}
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <Field name="firstName">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Número de teléfono
                </label>
                <Field name="phoneNumber">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <Field name="email">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="email"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>


              <div className="mb-4">
                <label
                  htmlFor="requestTypeId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tipo de solicitud
                </label>
                <Field name="requestTypeId">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Asunto
                </label>
                <Field name="subject">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="text"
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <Field name="description">
                  {({ input, meta }) => (
                    <textarea
                      {...input}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Documentos adjuntos
                </label>
                <FileUpload onFileUpload={handleFileUpload} />
                <Field name="photo">
                  {({ input, meta }) => (
                    <input
                      {...input}
                      type="hidden"
                      value={fileBase64}
                      className={`hidden ${meta.error && meta.touched ? "border-red-500" : ""
                        }`}
                    />
                  )}
                </Field>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
              >
                {data ? "Actualizar" : "Registrar Solicitud"}
              </button>
            </form>
          )}
        </Form>
      </div>
    </div>
  );

};

export default FormRequestView;
