import {
    ColumnDef
} from '@tanstack/react-table'
import {
    PlusIcon,
    ArrowPathIcon
} from '@heroicons/react/20/solid'
import React from 'react'
import { AppButton, AppPagination, LayoutHeadModal } from 'bm-react-lib'
import { Form } from 'react-final-form'
import { FormApi } from 'final-form'
import { useTableConfig, useModal, useLoader } from '@hooks/index'
import useGetRequestType from '../../../../hooks/data/get_typerequest'
import { AppTableBody, AppTableHead } from '../../../../../components/table'
import { RequestType } from '../../../../models/requestype'
import { calculatePagination } from '@utils/index'
import { AppModal } from '@components/index'
import { ModalsEnum } from '../../../../enums/modals_enum'
import CreateRequestTypePage from '../../pages/create'
import RequestTypePage from '../../pages/update'
import { useTranslation } from 'react-i18next'



interface TableViewProps {
    columns: ColumnDef<RequestType, unknown>[],
    onPaginate: (url: string, record: number) => void
    onFilter: (url: string) => void
}

const TableView: React.FC<TableViewProps> = (props) => {
    const { t } = useTranslation();
    const title = t("type");
    const loader = useLoader();
    const type = useGetRequestType();
    const data = type.data as Array<RequestType>;
    const columns = props.columns;
    const { modalState, openModal } = useModal();
    const table = useTableConfig({ data, columns });
    const pagination = calculatePagination(type.pagination) as Record<string, string>;

    const onSubmit = (data: unknown) => props.onFilter(JSON.stringify(data));

    const onReset = (form: FormApi<unknown>) => {
        form.reset();
        props.onFilter("");
    }

    return (
        <>
            <div className="app-layout">
                <Form
                    onSubmit={onSubmit}
                >
                    {({ handleSubmit, form }) => (
                        <form onSubmit={handleSubmit}>
                            <LayoutHeadModal title={title}>
                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        onClick={() => { openModal(ModalsEnum.CREATE_TYPE) }}
                                        text={t('new')}
                                        className='app-button-base'
                                        child={
                                            <PlusIcon aria-hidden="true" className="app-icon-base text-green-600" />
                                        }>
                                    </AppButton>
                                    <AppButton
                                        onClick={() => onReset(form)}
                                        context={loader}
                                        text={t('refresh')}
                                        className='app-button-base'
                                        child={
                                            <ArrowPathIcon aria-hidden="true" className="app-icon-base text-blue-600" />
                                        }>
                                    </AppButton>
                                </span>
                            </LayoutHeadModal>
                            <AppPagination
                                labelOf={t('of')}
                                labelTotal={t('records')}
                                labelPage={t('page')}
                                from={pagination.pFrom}
                                to={pagination.pTo}
                                total={pagination.pTotal}
                                currentPage={pagination.pCurrentPage}
                                lastPage={pagination.pLastPage}
                                childPrevious={<a onClick={() => props.onPaginate(pagination.pBackPage, 10)} className="app-pagination-previous">
                                    {t('previous')}
                                </a>}
                                childNext={<a onClick={() => props.onPaginate(pagination.pNextPage, 10)} className="app-pagination-next">
                                    {t('next')}
                                </a>}
                            ></AppPagination>
                            <div className="overflow-x-auto styled-table">
                                <table className='app-table'>
                                    <thead className='app-thead'>
                                        <AppTableHead handleSubmit={handleSubmit} table={table.getHeaderGroups()}>
                                        </AppTableHead>
                                    </thead>
                                    <tbody>
                                        <AppTableBody table={table.getRowModel()}></AppTableBody>
                                    </tbody>
                                </table>
                            </div>
                        </form>)
                    }
                </Form>
            </div>

            {modalState[ModalsEnum.CREATE_TYPE]?.isOpen ?
                <AppModal name={ModalsEnum.CREATE_TYPE}>
                    <CreateRequestTypePage title={title} name={ModalsEnum.CREATE_TYPE}></CreateRequestTypePage>
                </AppModal> : null}

            {modalState[ModalsEnum.UPDATE_TYPE]?.isOpen ?
                <AppModal name={ModalsEnum.UPDATE_TYPE}>
                    <RequestTypePage title={title} name={ModalsEnum.UPDATE_TYPE}></RequestTypePage>
                </AppModal> : null}
        </>
    )
}

export default TableView;