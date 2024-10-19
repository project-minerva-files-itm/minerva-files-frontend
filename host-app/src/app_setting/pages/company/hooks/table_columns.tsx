import React from "react";
import { Company } from "../../../models/company";
import { ColumnDef } from "@tanstack/react-table";
import { TableSelectType } from "bm-react-lib";
import { useTranslation } from "react-i18next";

const useTableColumns = (
  onIconClick: (data: TableSelectType<Company>) => void
) => {
  const { t } = useTranslation();
  return React.useMemo<ColumnDef<Company, unknown>[]>(
    () => [
      {
        id: "select",
        cell: ({ row }) => (
          <input
            type="radio"
            onChange={() =>
              onIconClick({ select: row.getValue("id"), data: [row.original] })
            }
            value={row.getValue("id")}
            name="table"
          />
        ),
      },
      {
        accessorFn: (row) => row.id,
        id: "id",
        cell: (info) => info.getValue(),
        header: () => <span>ID</span>,
        size: 30,
      },
      {
        accessorFn: (row) => row.name,
        id: "name",
        cell: (info) => info.getValue(),
        header: () => <span>{t("name")}</span>,
      },
      {
        accessorFn: (row) => row.document,
        id: "document",
        cell: (info) => info.getValue(),
        header: () => <span>{t("document")}</span>,
      },
      {
        accessorFn: (row) => row.address,
        id: "address",
        cell: (info) => info.getValue(),
        header: () => <span>{t("address")}</span>,
      },
      {
        accessorFn: (row) => row.phone,
        id: "phone",
        cell: (info) => info.getValue(),
        header: () => <span>{t("phone")}</span>,
      },
      {
        accessorFn: (row) => row.email,
        id: "email",
        cell: (info) => info.getValue(),
        header: () => <span>{t("email")}</span>,
      },
      {
        accessorFn: (row) => row.numberEmployees,
        id: "numberEmployees",
        cell: (info) => info.getValue(),
        header: () => <span>{t("numberEmployees")}</span>,
      },
    ],
    [t, onIconClick]
  );
};

export default useTableColumns;
