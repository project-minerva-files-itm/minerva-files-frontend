import { PageProps } from "@apptypes/page_type";
import FormDepartmentView from "../../components/form";
import { FormDepartment } from "../../components/form/types/department_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const DepartmentPage: React.FC<PageProps> = (props) => {

    const { closeModal, modalState } = useModal();
    const showToast = useToastNotification();
    const loader = useLoader();
    const { updateDepartment, deleteDepartment } = useService();

    const handlerSave = async (form: FormDepartment) => {
        loader.showLoader();
        const result = await updateDepartment(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    const handlerDelete = async (form: FormDepartment) => {
        loader.showLoader();
        const result = await deleteDepartment(form);
        showToast(result)
        loader.hideLoader();
        if (result.wasSuccess) {
            closeModal(props.name);
        }
    }

    return <FormDepartmentView
        isDeletable={true}
        data={modalState[props.name].data}
        title={props.title}
        name={props.name}
        handlerSave={handlerSave}
        handlerDelete={handlerDelete}
    />;
};

export default DepartmentPage;