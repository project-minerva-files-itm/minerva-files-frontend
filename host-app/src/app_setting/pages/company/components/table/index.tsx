import { useEffect, useState } from "react";
import { useModal } from "@hooks";
import { TableSelectType } from "bm-react-lib";
import { Company } from "../../../../models/company";
import { useService } from "../../hooks/service";
import useTableColumns from "../../hooks/table_columns";


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
            console.log(columns);
            getCompany(0, 10);
        }
    }, [isFiltering, getCompany, columns]);

    return <h1>COMPANY</h1>
}

export default TableCompanyPage;