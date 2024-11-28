import { PageProps } from "@apptypes/page_type";
import FormDocumentTypeView from "../../components/form";
import { FormType } from "../../components/form/types/type_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const CreateDocumentTypePage: React.FC<PageProps> = (props) => {
  const showToast = useToastNotification();
  const loader = useLoader();
  const { saveDocumentType } = useService();
  const { closeModal } = useModal();


  const handlerSave = async (form: FormType) => {
    loader.showLoader();
    form.RequestTypesId = props.id ?? 0;
    const result = await saveDocumentType(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  return (
    <FormDocumentTypeView
      isDeletable={false}
      title={props.title}
      name={props.name}
      handlerSave={handlerSave}
    />
  );
};

export default CreateDocumentTypePage;
