import React from 'react';
import { RequestType } from '../../../models/requestype';
import { ColumnDef } from '@tanstack/react-table';
import { TableSelectType } from 'bm-react-lib';
import { useTranslation } from 'react-i18next';

const useTableColumns = (onIconClick: (data: TableSelectType<RequestType>) => void) => {
    const { t } = useTranslation();
    return React.useMemo<ColumnDef<RequestType, unknown>[]>(() => [
        {
            id: 'select',
            cell: ({ row }) => (
                <input type="radio"
                    onChange={() => onIconClick({ select: row.original.id, data: [row.original] })}
                    value={row.original.id}
                    name="table" />
            ),
        },
        {
            id: 'template',
            enableColumnFilter: false,
            cell: ({ row }) => (
                <span title='Template' onClick={() => onIconClick({ action: "template", select: row.original.id, data: [row.original] })}>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#1C274C" strokeWidth="1.5"></path> <path d="M12 6L12 8M12 8L12 10M12 8H9.99998M12 8L14 8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M8 14H16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9 18H15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                </span>
            ),
        },
        {
            accessorFn: row => row.typeCorrespondence,
            id: 'typeCorrespondence',
            cell: info => info.getValue(),
            header: () => <span>{t('types')}</span>,
        },
        {
            accessorFn: row => row.name,
            id: 'Name',
            cell: info => info.getValue(),
            header: () => <span>{t('name')}</span>,
        },
        {
            accessorFn: row => row.description,
            id: 'description',
            header: () => <span>{t('description')}</span>,
            enableColumnFilter: false,
            cell: ({ row }) => (
                <span>
                    {row.getValue('description')}
                </span>
            ),
        },
        {
            accessorFn: row => row.commonUse,
            id: 'commonUse',
            header: () => <span>{t('commonUse')}</span>,
            enableColumnFilter: false,
            cell: ({ row }) => (
                <span>
                    {row.getValue('commonUse')}
                </span>
            ),
        },

    ], [onIconClick, t]);
};

export default useTableColumns;
