import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { Field } from "react-final-form";

interface AppTableHeadProps<T> {
    table: HeaderGroup<T>[];
    handleSubmit: () => void,
}

const AppTableHead = <T,>({ table, handleSubmit }: AppTableHeadProps<T>) => {

    const onKeyDown = (e: string) => {
        if (e === "Enter") {
            handleSubmit();
        }
    }

    return (
        table.map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                    return (
                        <th scope="col" className="py-3" key={header.id} colSpan={header.colSpan}> {/* px-6 py-3 */}
                            {header.isPlaceholder ? null : (
                                <>
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? 'cursor-pointer select-none'
                                                : '',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                    {header.column.getCanFilter() ? (
                                        <div>
                                            <Field name={header.column.id}>
                                                {({ input }) => (
                                                    <input  {...input}
                                                        style={{ width: header.column.getSize() }}
                                                        onKeyDown={(e) => onKeyDown(e.key)}
                                                        type="text"
                                                        className={"w-24 border shadow rounded"}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    ) : null}
                                </>
                            )}
                        </th>
                    )
                })}
            </tr>
        ))
    );
}

export default AppTableHead;