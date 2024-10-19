import { PageProps } from "@apptypes/page_type";
import FormRequestTypeView from "../../components/form";
import { FormType } from "../../components/form/types/type_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const RequestTypePage: React.FC<PageProps> = (props) => {

    const { closeModal, modalState } = useModal();
    const showToast = useToastNotification();
    const loader = useLoader();
    const { updateRequestType, deleteRequestType } = useService();

    const handlerSave = async (form: FormType) => {
        loader.showLoader();
        const result = await updateRequestType(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    const handlerDelete = async (form: FormType) => {
        loader.showLoader();
        const result = await deleteRequestType(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    return <FormRequestTypeView
        isDeletable={true}
        data={modalState[props.name].data}
        title={props.title}
        name={props.name}
        handlerSave={handlerSave}
        handlerDelete={handlerDelete}
    />;
};

export default RequestTypePage;