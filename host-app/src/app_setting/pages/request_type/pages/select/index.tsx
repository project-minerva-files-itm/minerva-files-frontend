import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { RequestType } from "../../../../models/requestype";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";
import DocumentypePage from "../../../document_type";
import AppModal from "@components/modal";

type TableRequestTypePageProps = object;

const TableRequestTypePage: React.FC<TableRequestTypePageProps> = () => {

  //const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltering, setFiltering] = useState(false);
  const { openModal } = useModal();
  const { getRequestType, onPaginate, onFilter } = useService();

  const getId = (result: TableSelectType<RequestType>) => {
    if (result.action == "template") {
      openModal(ModalsEnum.DOCUMENT_TYPE, result.data[0]);
      return;
    }
    openModal(ModalsEnum.UPDATE_TYPE, result.data[0]);
  };

  const columns = useTableColumns(getId);

  useEffect(() => {
    console.log("recargar ...");
    if (!isFiltering) {
      getRequestType(1, 10);
      setFiltering(true);
    }
  }, [isFiltering, getRequestType]);

  return (
    <>
      <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
      <AppModal name={ModalsEnum.DOCUMENT_TYPE}>
        <DocumentypePage></DocumentypePage>
      </AppModal>
    </>
  );
};

export default TableRequestTypePage;
