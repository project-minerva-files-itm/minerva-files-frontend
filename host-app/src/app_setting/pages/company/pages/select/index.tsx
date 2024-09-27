import { useEffect, useState } from "react";
import { useModal } from "@hooks/index";
import { TableSelectType } from "bm-react-lib";
import { Company } from "../../../../models/company";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "../../components/table";


type TableCompanyPageProps = object

const TableCompanyPage: React.FC<TableCompanyPageProps> = () => {

    const [isFiltering, setFiltering] = useState(false);
    const { openModal } = useModal();
    const { getCompany, onPaginate, onFilter } = useService();

    const getId = (result: TableSelectType<Company>) => {
        openModal('update_process', result.data[0]);

    }

    const columns = useTableColumns(getId);

    useEffect(() => {
        console.log("recargar ...")
        if (!isFiltering) {
            getCompany(1, 10);
            setFiltering(true);
        }
    }, [isFiltering, getCompany]);

    return <TableView columns={columns} onPaginate={onPaginate} onFilter={onFilter} />
}

export default TableCompanyPage;