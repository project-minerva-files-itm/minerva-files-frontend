import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';

interface TableConfigOptions<TData> {
    data?: TData[];
    columns?: ColumnDef<TData, unknown>[];
    state?: object;
    debugTable?: boolean;
    debugHeaders?: boolean;
    debugColumns?: boolean;
    filterFns?: object;
}

const useTableConfig = <TData>(options: TableConfigOptions<TData>) => {
    const {
        data = [], // Valores por defecto
        columns = [],
        state = {},
        debugTable = false,
        debugHeaders = false,
        debugColumns = false,

    } = options;

    const table = useReactTable({
        data,
        columns,
        state,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable,
        debugHeaders,
        debugColumns,
    });

    return table;
};

export default useTableConfig;
