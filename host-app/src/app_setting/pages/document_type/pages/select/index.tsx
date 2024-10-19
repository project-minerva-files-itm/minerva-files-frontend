import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { DocumentType } from "../../../../models/documentype";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";

type TableDocumentTypePageProps = object;

const TableDocumentTypePage: React.FC<TableDocumentTypePageProps> = () => {
  const [isFiltering, setFiltering] = useState(false);
  const { openModal } = useModal();
  const { getDocumentType, onPaginate, onFilter } = useService();

  const getId = (result: TableSelectType<DocumentType>) => {
    openModal(ModalsEnum.UPDATE_TYPE, result.data[0]);
  };

  const columns = useTableColumns(getId);

  useEffect(() => {
    console.log("recargar ...");
    if (!isFiltering) {
      getDocumentType(1, 10);
      setFiltering(true);
    }
  }, [isFiltering, getDocumentType]);

  return (
    <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
  );
};

export default TableDocumentTypePage;
