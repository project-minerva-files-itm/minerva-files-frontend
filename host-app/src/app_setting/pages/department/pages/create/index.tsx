import { PageProps } from "@apptypes/page_type";
import FormDepartmentView from "../../components/form";
import { FormDepartment } from "../../components/form/types/department_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";


const CreateDepartmentPage: React.FC<PageProps> = (props) => {

    const showToast = useToastNotification();
    const loader = useLoader();
    const { saveDepartment } = useService();
    const { closeModal } = useModal();

    const handlerSave = async (form: FormDepartment) => {
        loader.showLoader();
        const result = await saveDepartment(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    return <FormDepartmentView isDeletable={false} title={props.title} name={props.name} handlerSave={handlerSave} />;
};

export default CreateDepartmentPage;