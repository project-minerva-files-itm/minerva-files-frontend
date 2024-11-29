import React from 'react';
import { Request } from '../../../models/request';
import { ColumnDef } from '@tanstack/react-table';
import { TableSelectType } from 'bm-react-lib';
import { useTranslation } from 'react-i18next';


const useTableColumns = (onIconClick: (data: TableSelectType<Request>) => void) => {
  const { t } = useTranslation();
  return React.useMemo<ColumnDef<Request, unknown>[]>(() => [
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
      accessorFn: row => row.firstName,
      id: 'firstName',
      cell: info => info.getValue(),
      header: () => <span>{t('firstName')}</span>,
    },
    {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => info.getValue(),
      header: () => <span>{t('lastName')}</span>,
    },
    {
      accessorFn: row => row.email,
      id: 'email',
      cell: info => info.getValue(),
      header: () => <span>{t('email')}</span>,
    },
    {
      accessorFn: row => row.subject,
      id: 'subject',
      cell: info => info.getValue(),
      header: () => <span>{t('subject')}</span>,
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
