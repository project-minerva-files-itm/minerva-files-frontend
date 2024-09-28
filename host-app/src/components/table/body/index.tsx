import { flexRender, RowModel } from "@tanstack/react-table";

interface AppTableBodyProps<T> {
    table: RowModel<T>;
}

const AppTableBody = <T,>({ table }: AppTableBodyProps<T>) => {

    return (
        table.rows.map(row => {
            return (
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={row.id}>
                    {row.getVisibleCells().map(cell => {
                        return (
                            <td className="px-6 py-4" key={cell.id}> {/*className="px-6 py-4" */}
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        )
                    })}
                </tr>
            )
        })
    );
}

export default AppTableBody;
