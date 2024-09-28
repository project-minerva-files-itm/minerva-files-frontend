import { PageProps } from "@apptypes/page_type";
import FormCompanyView from "../../components/form";
import { FormActivity } from "../../components/form/types/activity_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";


const CreateActivityStatePage: React.FC<PageProps> = (props) => {

    const showToast = useToastNotification();
    const loader = useLoader();
    const { saveActivityState } = useService();
    const { closeModal } = useModal();

    const handlerSave = async (form: FormActivity) => {
        loader.showLoader();
        const result = await saveActivityState(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    return <FormCompanyView isDeletable={false} title={props.title} name={props.name} handlerSave={handlerSave} />;
};

export default CreateActivityStatePage;