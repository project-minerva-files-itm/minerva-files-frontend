import { ColumnDef } from "@tanstack/react-table"

export interface TableInterfaceProps<T> {
  columns: ColumnDef<T, unknown>[],
  onProcessByPage: (url: string) => void,
  onProcessFilter: (url: string) => void,
  data?: T,
}