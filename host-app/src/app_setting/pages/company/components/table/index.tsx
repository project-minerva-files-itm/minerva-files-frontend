import { useEffect, useState } from "react";
import { useModal } from "@hooks";
import { TableSelectType } from "bm-react-lib";
import { Company } from "../../../../models/company";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";
import TableView from "./view";


type TableCompanyPageProps = object

const TableCompanyPage: React.FC<TableCompanyPageProps> = () => {
    console.log("ENTROOOOOO")
    const [isFiltering, setFiltering] = useState(false);
    const { openModal } = useModal();
    const { getCompany } = useService();

    const getId = (result: TableSelectType<Company>) => {
        openModal('update_process', result.data[0]);
        setFiltering(true);
    }

    const columns = useTableColumns(getId);

    useEffect(() => {
        if (!isFiltering) {
            getCompany(0, 10);
        }
    }, [isFiltering, getCompany]);

    return <TableView columns={columns} />
}

export default TableCompanyPage;