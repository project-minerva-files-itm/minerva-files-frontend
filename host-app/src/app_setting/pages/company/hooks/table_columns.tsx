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
                    onChange={() => onIconClick({ select: row.getValue('id'), data: [row.original] })}
                    value={row.getValue('id')}
                    name="table" />
            ),
        },
        {
            accessorFn: row => row.id,
            id: 'id',
            cell: info => info.getValue(),
            header: () => <span>ID</span>,
            size: 30
        },
        {
            accessorFn: row => row.name,
            id: 'Name',
            cell: info => info.getValue(),
            header: () => <span>Name</span>,
        },
        {
            accessorFn: row => row.document,
            id: 'document',
            cell: info => info.getValue(),
            header: () => <span>Document</span>,
        },
        {
            accessorFn: row => row.address,
            id: 'address',
            cell: info => info.getValue(),
            header: () => <span>Address</span>,
        },
        {
            accessorFn: row => row.phone,
            id: 'phone',
            cell: info => info.getValue(),
            header: () => <span>Phone</ span >,
        },
        {
            accessorFn: row => row.email,
            id: 'email',
            cell: info => info.getValue(),
            header: () => <span>Email</span>,
        },
        {
            accessorFn: row => row.numberEmployees,
            id: 'numberEmployees',
            cell: info => info.getValue(),
            header: () => <span>NumberEmployees</span>,
        },

    ], [onIconClick]);
};

export default useTableColumns;
