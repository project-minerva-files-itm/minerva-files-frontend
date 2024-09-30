import React from 'react';
import { ActivityState } from '../../../models/activitystate';
import { ColumnDef } from '@tanstack/react-table';
import { TableSelectType } from 'bm-react-lib';
import { useTranslation } from 'react-i18next';


const useTableColumns = (onIconClick: (data: TableSelectType<ActivityState>) => void) => {
    const { t } = useTranslation();
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
            header: () => <span>{t('name')}</span>,
        },
        {
            accessorFn: row => row.description,
            id: 'description',
            cell: info => info.getValue(),
            header: () => <span>{t('description')}</span>,
        },

    ], [t, onIconClick]);
};

export default useTableColumns;
