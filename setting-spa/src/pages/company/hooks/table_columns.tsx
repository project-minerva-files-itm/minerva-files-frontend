import React from 'react';
import { Company } from '../../../models/company';
import { ColumnDef } from '@tanstack/react-table';
import { TableSelectType } from 'bm-react-lib';


const useTableColumns = (onIconClick: (data: TableSelectType<Company>) => void) => {
    return React.useMemo<ColumnDef<Company, unknown>[]>(() => [
        {
            id: 'select',
            cell: ({ row }) => (
                <input type="radio"
                    onChange={() => onIconClick({ select: row.getValue('Id'), data: [row.original] })}
                    value={row.getValue('Id')}
                    name="table" />
            ),
        },
        {
            accessorFn: row => row.Id,
            id: 'Id',
            cell: info => info.getValue(),
            header: () => <span>ID</span>,
            size: 30
        },
        {
            accessorFn: row => row.Name,
            id: 'Name',
            cell: info => info.getValue(),
            header: () => <span>Name</span>,
        },
        {
            accessorFn: row => row.Document,
            id: 'Document',
            cell: info => info.getValue(),
            header: () => <span>Document</span>,
        },
        {
            accessorFn: row => row.Address,
            id: 'Address',
            cell: info => info.getValue(),
            header: () => <span>Address</span>,
        },
        {
            accessorFn: row => row.Phone,
            id: 'Phone',
            cell: info => info.getValue(),
            header: () => <span>Phone</ span >,
        },
        {
            accessorFn: row => row.Email,
            id: 'Email',
            cell: info => info.getValue(),
            header: () => <span>Email</span>,
        },
        {
            accessorFn: row => row.NumberEmployees,
            id: 'NumberEmployees',
            cell: info => info.getValue(),
            header: () => <span>NumberEmployees</span>,
        },

    ], [onIconClick]);
};

export default useTableColumns;
