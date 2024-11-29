import { PageProps } from "@apptypes/page_type";
import FormRequestView from "../../components/from";
import { FormRequest } from "../../components/from/types/request_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const DepartmentPage: React.FC<PageProps> = (props) => {

  const { closeModal, modalState } = useModal();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { updateRequest, deleteRequest } = useService();

  const handlerSave = async (form: FormRequest) => {
    loader.showLoader();
    const result = await updateRequest(form);
    showToast(result)
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  }

  const handlerDelete = async (form: FormRequest) => {
    loader.showLoader();
    const result = await deleteRequest(form);
    showToast(result)
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  }

  return <FormRequestView
    isDeletable={true}
    data={modalState[props.name].data}
    title={props.title}
    name={props.name}
    handlerSave={handlerSave}
    handlerDelete={handlerDelete}
  />;
};

export default DepartmentPage;