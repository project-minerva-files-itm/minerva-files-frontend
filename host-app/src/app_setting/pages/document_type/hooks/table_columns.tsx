import React from "react";
import { DocumentType } from "../../../models/documentype";
import { ColumnDef } from "@tanstack/react-table";
import { TableSelectType } from "bm-react-lib";
import { useTranslation } from "react-i18next";

const useTableColumns = (
  onIconClick: (data: TableSelectType<DocumentType>) => void
) => {
  const { t } = useTranslation();
  return React.useMemo<ColumnDef<DocumentType, unknown>[]>(
    () => [
      {
        id: "select",
        cell: ({ row }) => (
          <input
            type="radio"
            onChange={() =>
              onIconClick({ select: row.original.id, data: [row.original] })
            }
            value={row.original.id}
            name="table"
          />
        ),
      },
      {
        id: "link",
        cell: ({ row }) =>
          (row.original.link ? <a title={t("see")} href={row.original.link} target="_blank">Doc</a> : null)
      },
      {
        accessorFn: (row) => row.name,
        id: "Name",
        cell: (info) => info.getValue(),
        header: () => <span>{t("name")}</span>,
      },
      {
        accessorFn: (row) => row.description,
        id: "Description",
        cell: (info) => info.getValue(),
        header: () => <span>{t("description")}</span>,
      },
      {
        accessorFn: (row) => row.startDate,
        id: "StartDate",
        cell: (info) => info.getValue(),
        header: () => <span>{t("startDate")}</span>,
      },
      {
        accessorFn: (row) => row.endDate,
        id: "EndDate",
        cell: (info) => info.getValue(),
        header: () => <span>{t("endDate")}</span>,
      },
      {
        accessorFn: (row) => row.size,
        id: "Size",
        cell: (info) => info.getValue(),
        header: () => <span>{t("sizeMax")}</span>,
      },
      {
        accessorFn: (row) => row.typeDocument,
        id: "typeDocument",
        cell: (info) => info.getValue(),
        header: () => <span>{t("types")}</span>,
      },
    ],
    [onIconClick]
  );
};

export default useTableColumns;
