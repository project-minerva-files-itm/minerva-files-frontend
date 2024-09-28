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
import useGetCompany from '../../../../hooks/data/get_company'
import { AppTableBody, AppTableHead } from '../../../../../components/table'
import { Company } from '../../../../models/company'
import { calculatePagination } from '@utils/index'
import { AppModal } from '@components/index'
import { ModalsEnum } from '../../../../enums/modals_enum'
import CreateCompanyPage from '../../pages/create'
import UpdateCompanyPage from '../../pages/update'



interface TableViewProps {
    columns: ColumnDef<Company, unknown>[],
    onPaginate: (url: string, record: number) => void
    onFilter: (url: string) => void
}

const TableView: React.FC<TableViewProps> = (props) => {

    const title = "Company";
    const loader = useLoader();
    const company = useGetCompany();
    const data = company.data as Array<Company>;
    const columns = props.columns;
    const { modalState, openModal } = useModal();
    const table = useTableConfig({ data, columns });
    const pagination = calculatePagination(company.pagination) as Record<string, string>;

    const onSubmit = (data: unknown) => {
        console.log(data)
    }


    const onReset = (form: FormApi<unknown>) => {
        form.reset();
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
                                        onClick={() => { openModal(ModalsEnum.CREATE_COMPANY) }}
                                        text='New'
                                        className='app-button-base'
                                        child={
                                            <PlusIcon aria-hidden="true" className="app-icon-base text-green-600" />
                                        }>
                                    </AppButton>
                                    <AppButton
                                        onClick={() => onReset(form)}
                                        context={loader}
                                        text='Update'
                                        className='app-button-base'
                                        child={
                                            <ArrowPathIcon aria-hidden="true" className="app-icon-base text-blue-600" />
                                        }>
                                    </AppButton>
                                </span>
                            </LayoutHeadModal>
                            <AppPagination
                                from={pagination.pFrom}
                                to={pagination.pTo}
                                total={pagination.pTotal}
                                currentPage={pagination.pCurrentPage}
                                lastPage={pagination.pLastPage}
                                childPrevious={<a onClick={() => props.onPaginate(pagination.pBackPage, 10)} className="app-pagination-previous">
                                    Previous
                                </a>}
                                childNext={<a onClick={() => props.onPaginate(pagination.pNextPage, 10)} className="app-pagination-next">
                                    Next
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

            {modalState[ModalsEnum.CREATE_COMPANY]?.isOpen ?
                <AppModal name={ModalsEnum.CREATE_COMPANY}>
                    <CreateCompanyPage title={title} name={ModalsEnum.CREATE_COMPANY}></CreateCompanyPage>
                </AppModal> : null}

            {modalState[ModalsEnum.UPDATE_COMPANY]?.isOpen ?
                <AppModal name={ModalsEnum.UPDATE_COMPANY}>
                    <UpdateCompanyPage title={title} name={ModalsEnum.UPDATE_COMPANY}></UpdateCompanyPage>
                </AppModal> : null}
        </>
    )
}

export default TableView;