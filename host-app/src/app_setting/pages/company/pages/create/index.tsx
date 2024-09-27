import { PageProps } from "@apptypes/page_type";
import FormCompanyView from "../../components/form";
import { FormCompany } from "../../components/form/types/company_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";


const CreateCompanyPage: React.FC<PageProps> = (props) => {

    const showToast = useToastNotification();
    const loader = useLoader();
    const { saveCompany } = useService();
    const { closeModal } = useModal();

    const handlerSave = async (form: FormCompany) => {
        loader.showLoader();
        const result = await saveCompany(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    /*useEffect(() => {
    });*/

    return <FormCompanyView isDeletable={false} title={props.title} name={props.name} handlerSave={handlerSave} />;
};

export default CreateCompanyPage;