import React from 'react';
import { Field, Form } from 'react-final-form';
import { useModal, useValidation, useLoader } from '@hooks/index';
import { AppButton, LayoutForm, LayoutHeadModal, SelectDto, UILabel } from 'bm-react-lib';
import { CheckCircleIcon, TrashIcon, XCircleIcon } from '@heroicons/react/16/solid';
import { FormType } from './types/type_form';
import { FormProps } from '@apptypes/form_type';
import Select, { SingleValue } from 'react-select';
import useGetTypeCorrespondenceState from '../../../../hooks/data/get_type_correspondence';
import { t } from 'i18next';
import { FormApi } from 'final-form';

const FormRequestTypeView: React.FC<FormProps<FormType>> = ({ title, name, data, handlerSave, isDeletable, handlerDelete }) => {

    const correspondence = useGetTypeCorrespondenceState();
    const loader = useLoader();
    const { closeModal } = useModal();

    const onSubmit = (person: FormType) =>
        handlerSave(person);

    const { validate } = useValidation<FormType>();
    const requiredFields: (keyof FormType)[] = [
        'name',
        'description',
        'TypeCorrespondence',
        'CommonUse'
    ];

    const handleDelete = () => {
        if (isDeletable && handlerDelete) {
            handlerDelete(data!);
        }
    };

    const onChangeCorrespondence = (option: SingleValue<SelectDto>, form: FormApi<FormType, Partial<FormType>>) => {
        form.change('TypeCorrespondence', option?.value.toString());
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
                            <LayoutForm className="">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7">
                                    <div className="sm:col-span-1">
                                        <UILabel htmlFor="name" text={t("name")} />
                                        <Field name='name'>
                                            {({ input, meta }) => (

                                                <input  {...input}
                                                    type="text"
                                                    className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                />
                                            )}
                                        </Field>
                                    </div>

                                    <div className="sm:col-span-1">
                                        <UILabel htmlFor="TypeCorrespondence" text={t("typesCorrespondence")} />
                                        <Field name="TypeCorrespondence">
                                            {({ input, meta }) => (
                                                <>
                                                    <Select
                                                        options={correspondence}
                                                        className={meta.error && meta.touched ? 'app-select-error' : 'app-select'}
                                                        onChange={(option) => onChangeCorrespondence(option, form)}
                                                    />
                                                    <input {...input} type="hidden" />
                                                </>
                                            )}
                                        </Field>
                                    </div>

                                    <div className="sm:col-span-1">
                                        <UILabel htmlFor="CommonUse" text={t("commonUse")} />
                                        <Field name='CommonUse'>
                                            {({ input, meta }) => (

                                                <input  {...input}
                                                    type="text"
                                                    maxLength={255}
                                                    className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                />
                                            )}
                                        </Field>
                                    </div>

                                    <div className="sm:col-span-1">
                                        <UILabel htmlFor="description" text={t("description")} />
                                        <Field name='description'>
                                            {({ input, meta }) => (
                                                <textarea  {...input}
                                                    className={meta.error && meta.touched ? "app-field-fail" : "app-field"}
                                                />
                                            )}
                                        </Field>
                                    </div>

                                </div>
                            </LayoutForm>
                        </form>
                    )
                }
                }
            </Form >
        </>
    )
};


export default FormRequestTypeView;