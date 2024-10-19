import { PageProps } from "@apptypes/page_type";
import FormActivityTypeView from "../../components/form";
import { FormType } from "../../components/form/types/type_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const CreateActivityTypePage: React.FC<PageProps> = (props) => {
  const showToast = useToastNotification();
  const loader = useLoader();
  const { saveActivityType } = useService();
  const { closeModal } = useModal();

  const handlerSave = async (form: FormType) => {
    loader.showLoader();
    const result = await saveActivityType(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  return (
    <FormActivityTypeView
      isDeletable={false}
      title={props.title}
      name={props.name}
      handlerSave={handlerSave}
    />
  );
};

export default CreateActivityTypePage;
