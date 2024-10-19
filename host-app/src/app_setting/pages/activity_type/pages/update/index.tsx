import { PageProps } from "@apptypes/page_type";
import FormActivityTypeView from "../../components/form";
import { FormType } from "../../components/form/types/type_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const ActivityTypePage: React.FC<PageProps> = (props) => {
  const { closeModal, modalState } = useModal();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { updateActivityType, deleteActivityType } = useService();

  const handlerSave = async (form: FormType) => {
    loader.showLoader();
    const result = await updateActivityType(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  const handlerDelete = async (form: FormType) => {
    loader.showLoader();
    const result = await deleteActivityType(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  return (
    <FormActivityTypeView
      isDeletable={true}
      data={modalState[props.name].data}
      title={props.title}
      name={props.name}
      handlerSave={handlerSave}
      handlerDelete={handlerDelete}
    />
  );
};

export default ActivityTypePage;
