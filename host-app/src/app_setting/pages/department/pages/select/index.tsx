import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { Department } from "../../../../models/department";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";
import { ModalsEnum } from "../../../../enums/modals_enum";


type TableDepartmentPageProps = object

const TableDepartmentPage: React.FC<TableDepartmentPageProps> = () => {
    
    const [isFiltering, setFiltering] = useState(false);
    const { openModal } = useModal();
    const { getDepartment, onPaginate, onFilter } = useService();

    const getId = (result: TableSelectType<Department>) => {
        openModal(ModalsEnum.UPDATE_DEPARTMENT, result.data[0]);
    }

    const columns = useTableColumns(getId);

    useEffect(() => {
        console.log("recargar ...")
        if (!isFiltering) {
            getDepartment(1, 10);
            setFiltering(true);
        }
    }, [isFiltering, getDepartment]);

    return <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
}

export default TableDepartmentPage;