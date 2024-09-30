import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { ActivityState } from "../../../../models/activitystate";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";


type TableActivityStatePageProps = object

const TableActivityStatePage: React.FC<TableActivityStatePageProps> = () => {

    const [isFiltering, setFiltering] = useState(false);
    const { openModal } = useModal();
    const { getActivityState, onPaginate, onFilter } = useService();

    const getId = (result: TableSelectType<ActivityState>) => {
        openModal(ModalsEnum.UPDATE_ACTIVITY, result.data[0]);
    }

    const columns = useTableColumns(getId);

    useEffect(() => {
        console.log("recargar ...")
        if (!isFiltering) {
            getActivityState(1, 10);
            setFiltering(true);
        }
    }, [isFiltering, getActivityState]);

    return <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
}

export default TableActivityStatePage;