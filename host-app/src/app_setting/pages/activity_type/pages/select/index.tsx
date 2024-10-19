import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { ActivityType } from "../../../../models/activitytype";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";

type TableActivityTypePageProps = object;

const TableActivityTypePage: React.FC<TableActivityTypePageProps> = () => {
  const [isFiltering, setFiltering] = useState(false);
  const { openModal } = useModal();
  const { getActivityType, onPaginate, onFilter } = useService();

  const getId = (result: TableSelectType<ActivityType>) => {
    openModal(ModalsEnum.UPDATE_TYPE, result.data[0]);
  };

  const columns = useTableColumns(getId);

  useEffect(() => {
    console.log("recargar ...");
    if (!isFiltering) {
      getActivityType(1, 10);
      setFiltering(true);
    }
  }, [isFiltering, getActivityType]);

  return (
    <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
  );
};

export default TableActivityTypePage;
