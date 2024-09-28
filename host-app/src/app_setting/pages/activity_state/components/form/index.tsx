import React from 'react';
import { Field, Form } from 'react-final-form';
import { useModal, useValidation, useLoader } from '@hooks/index';
import { AppButton, LayoutHeadModal, UILabel } from 'bm-react-lib';
import { CheckCircleIcon, TrashIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { FormActivity } from './types/activity_form';
import { FormProps } from '@apptypes/form_type';


const FormActivityStateView: React.FC<FormProps<FormActivity>> = ({ title, name, data, handlerSave, isDeletable, handlerDelete }) => {

    const loader = useLoader();
    const { closeModal } = useModal();

    const onSubmit = (person: FormActivity) =>
        handlerSave(person);

    const { validate } = useValidation<FormActivity>();
    const requiredFields: (keyof FormActivity)[] = [
      'name',
      'description'
    ];

    const handleDelete = () => {
        if (isDeletable && handlerDelete) {
            handlerDelete(data!);
        }
    };

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
                        <form onSubmit={handleSubmit}>

                            <LayoutHeadModal title={title}>
                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        text={data ? "Update" : "Create"}
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
                                        text='Cancel'
                                        onClick={() => closeModal(name)}
                                        child={
                                            <XCircleIcon aria-hidden="true" className="app-icon-base text-orange-400" />
                                        }>
                                    </AppButton>
                                </span>

                                {isDeletable ? <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        text='Delete'
                                        onClick={handleDelete}
                                        className={'app-button-base'}
                                        child={
                                            <TrashIcon aria-hidden="true" className="app-icon-base text-red-600" />
                                        }>
                                    </AppButton>
                                </span> : null}

                            </LayoutHeadModal>

                            <div className="space-y-12 ">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-6">

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor="name" text='Name' />
                                            <Field name='name'>
                                                {({ input, meta }) => (

                                                    <input  {...input}
                                                        type="text"
                                                        className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                    />
                                                )}
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <UILabel htmlFor="description" text='Description' />
                                            <Field name='description'>
                                                {({ input, meta }) => (
                                                    <input  {...input}
                                                        type="text"
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


export default FormActivityStateView;