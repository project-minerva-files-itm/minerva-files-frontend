import { PageProps } from "@apptypes/page_type";
import FormCompanyView from "../../components/form";
import { FormCompany } from "../../components/form/types/company_form";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useService } from "../../hooks/service";

const UpdateCompanyPage: React.FC<PageProps> = (props) => {
  const { closeModal, modalState } = useModal();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { updateCompany, deleteCompany } = useService();

  const handlerSave = async (form: FormCompany) => {
    loader.showLoader();
    const result = await updateCompany(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  const handlerDelete = async (form: FormCompany) => {
    loader.showLoader();
    const result = await deleteCompany(form);
    showToast(result);
    loader.hideLoader();
    if (result.wasSuccess) {
      closeModal(props.name);
    }
  };

  return (
    <FormCompanyView
      isDeletable={true}
      data={modalState[props.name].data}
      title={props.title}
      name={props.name}
      handlerSave={handlerSave}
      handlerDelete={handlerDelete}
    />
  );
};

export default UpdateCompanyPage;
