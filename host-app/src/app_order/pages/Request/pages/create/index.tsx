import { PageProps } from "@apptypes/page_type";
import useApiRequest from "../../../../hooks/services/api_request";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import FormRequestView from "../../components/from";
import { FormRequest } from "../../components/from/types/request_form";
import { ModalsEnum } from "../../../../enums/modals_enum";
import { useNavigate } from "react-router";

const RegisterRequestPage: React.FC<PageProps> = (props) => {

  const { t, i18n } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { save } = useApiRequest();
  const { closeModal } = useModal();
  const navigate = useNavigate();


  const handlerSaveWithBase64 = async (user: FormRequest, base64: string) => {

    loader.showLoader();
    //user.language = i18n.language;
    //user.userName = user.email;
    //user.rol = 1;

    const cleanBase64 = base64.replace(/^data:image\/[a-z]+;base64,/, '');

    user.photo = cleanBase64;

    const response = await save(user);
    loader.hideLoader();

    if (response.status === 400) {
      response.message = t("requestError");
      response.wasSuccess = false;
    }

    if (response.wasSuccess) {
      response.message = t("requestRegister");
      response.wasSuccess = true;
      closeModal(ModalsEnum.CREATE_REQUEST);
      navigate('/request_success')
    }

    showToast(response);

  }


  const handlerSave = async (user: FormRequest) => {
    console.log(user);
  }


  return <FormRequestView name={ModalsEnum.CREATE_REQUEST} handlerSaveWithBase64={handlerSaveWithBase64} handlerSave={handlerSave} title={props.title} isDeletable={false}></FormRequestView>

}

export default RegisterRequestPage;