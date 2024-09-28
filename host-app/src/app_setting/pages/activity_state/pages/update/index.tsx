import { PageProps } from "@apptypes/page_type";
import FormCompanyView from "../../components/form";
import { FormActivity } from "../../components/form/types/activity_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const ActivityStatePage: React.FC<PageProps> = (props) => {

    const { closeModal, modalState } = useModal();
    const showToast = useToastNotification();
    const loader = useLoader();
    const { updateActivityState, deleteActivityState } = useService();

    const handlerSave = async (form: FormActivity) => {
        loader.showLoader();
        const result = await updateActivityState(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    const handlerDelete = async (form: FormActivity) => {
        loader.showLoader();
        const result = await deleteActivityState(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    return <FormCompanyView
        isDeletable={true}
        data={modalState[props.name].data}
        title={props.title}
        name={props.name}
        handlerSave={handlerSave}
        handlerDelete={handlerDelete}
    />;
};

export default ActivityStatePage;