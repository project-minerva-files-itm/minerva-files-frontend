import React from 'react';
import { Field, Form } from 'react-final-form';
import { CompanyForm } from '../types/company_form';
import { useModal } from '../../../../../providers/hooks/modal';
import useValidation from '../../../../../hooks/utils/validation';
import { AppButton, LayoutHeadModal, UILabel } from 'bm-react-lib';
import { CheckCircleIcon, TrashIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { useLoader } from '../../../../../hooks/utils/loader';

interface FormCompanyViewProps {
    name: string,
    data?: CompanyForm,
    handlerSave: (person: CompanyForm) => void
}

const FormCompanyView: React.FC<FormCompanyViewProps> = ({ name, data, handlerSave }) => {

    const loader = useLoader();
    const { closeModal } = useModal();

    const onSubmit = (person: CompanyForm) =>
        handlerSave(person);

    const { validate } = useValidation<CompanyForm>();
    const requiredFields: (keyof CompanyForm)[] = [
        'id',
    ];


    return (
        <>
            <Form
                initialValues={data}
                onSubmit={onSubmit}
                validate={(values) => validate(values, requiredFields)}
            >
                {({
                    handleSubmit
                }) => {

                    return (
                        <form name="frmRegisterProcess" onSubmit={handleSubmit}>

                            <LayoutHeadModal title='Empresa'>
                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        text={data ? "Actualizar" : "Crear"}
                                        className='app-button-base'
                                        child={
                                            <CheckCircleIcon aria-hidden="true" className="app-icon-base text-green-600" />
                                        }>
                                    </AppButton>
                                </span>

                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        className='app-button-base'
                                        text='Cancelar'
                                        onClick={() => closeModal(name)}
                                        child={
                                            <XCircleIcon aria-hidden="true" className="app-icon-base text-orange-400" />
                                        }>
                                    </AppButton>
                                </span>

                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        text='Eliminar'
                                        className={'app-button-base'}
                                        child={
                                            <TrashIcon aria-hidden="true" className="app-icon-base text-red-600" />
                                        }>
                                    </AppButton>
                                </span>
                            </LayoutHeadModal>

                            <div className="space-y-12 h-100">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor="Name" text='Name' />
                                            <Field name='Name'>
                                                {({ input, meta }) => (

                                                    <input  {...input}
                                                        type="text"
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor="Document" text='Document' />
                                            <Field name='Document'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type="text"
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor='Address' text='Address' />
                                            <Field name='Address'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type="text"
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor='Phone' text='Phone' />
                                            <Field name='Phone'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type="text"
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor='Email' text='Email' />
                                            <Field name='Email'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type='Email'
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor='NumberEmployees' text='NumberEmployees' />
                                            <Field name='NumberEmployees'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type='numeric'
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </form>
                    )
                }
                }
            </Form >

        </>
    )
};


export default FormCompanyView;