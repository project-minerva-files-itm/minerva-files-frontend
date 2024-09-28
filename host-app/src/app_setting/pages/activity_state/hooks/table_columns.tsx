import React from 'react';
import { ActivityState } from '../../../models/activitystate';
import { ColumnDef } from '@tanstack/react-table';
import { TableSelectType } from 'bm-react-lib';


const useTableColumns = (onIconClick: (data: TableSelectType<ActivityState>) => void) => {
    return React.useMemo<ColumnDef<ActivityState, unknown>[]>(() => [
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
            accessorFn: row => row.description,
            id: 'description',
            cell: info => info.getValue(),
            header: () => <span>Description</span>,
        },

    ], [onIconClick]);
};

export default useTableColumns;
