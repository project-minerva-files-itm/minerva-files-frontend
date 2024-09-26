import TableView from "./view";
import { useService } from "../../hooks/service";
import { useEffect, useState } from "react";
import { useModal } from "../../../../providers/hooks/modal";
import { Company } from "../../../../models/company";
import { TableSelectType } from "bm-react-lib";
import useTableColumns from "../../hooks/table_columns";


type TableCompanyPageProps = object

const TableCompanyPage: React.FC<TableCompanyPageProps> = () => {

    const [isFiltering, setFiltering] = useState(false);
    const { openModal } = useModal()

    const getId = (result: TableSelectType<Company>) => {
        openModal('update_process', result.data[0]);
        setFiltering(true);
    }

    const { getCompany } = useService();
    const columns = useTableColumns(getId);


    useEffect(() => {
        if (!isFiltering) {
            getCompany(0, 10);
        }
    }, [isFiltering, getCompany]);


    //onProcessByPage={onProcessByPage} onProcessFilter={getProcessFilter}
    return <TableView columns={columns} />;
}

export default TableCompanyPage;