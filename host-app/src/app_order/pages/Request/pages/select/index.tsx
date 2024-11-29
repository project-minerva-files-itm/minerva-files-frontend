import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { Request } from "../../../../models/request";
import { useService } from "../../../Request/hooks/service";
import useTableColumns from "../../../Request/hooks/table_columns";
import TableView from "../../../Request/components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";


type TableRequestPageProps = object

const TableRequestPage: React.FC<TableRequestPageProps> = () => {

  const [isFiltering, setFiltering] = useState(false);
  const { openModal } = useModal();
  const { getRequest, onPaginate, onFilter } = useService();

  const getId = (result: TableSelectType<Request>) => {
    openModal(ModalsEnum.UPDATE_REQUEST, result.data[0]);
  }

  const columns = useTableColumns(getId);

  useEffect(() => {
    console.log("recargar ...")
    if (!isFiltering) {
      getRequest(1, 10);
      setFiltering(true);
    }
  }, [isFiltering, getRequest]);

  return <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
}

export default TableRequestPage;