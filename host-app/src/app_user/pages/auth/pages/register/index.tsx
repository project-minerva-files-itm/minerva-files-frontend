import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import FormUserView from "../../components/form";
import { FormType } from "../../components/form/types/type_form";
import { ModalsEnum } from "../../../../enums/modals_enum";
import { useNavigate } from "react-router";

const RegisterUserPage: React.FC = () => {

  const { t, i18n } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { register } = useApiLogin();
  const { closeModal } = useModal();
  const navigate = useNavigate();


  const handlerSaveWithBase64 = async (user: FormType, base64: string) => {

    loader.showLoader();
    user.language = i18n.language;
    user.userName = user.email;
    user.rol = 1;

    const cleanBase64 = base64.replace(/^data:image\/[a-z]+;base64,/, '');

    user.photo = cleanBase64;

    const response = await register(user);
    loader.hideLoader();

    if (response.status === 400) {
      response.message = t("loginError");
      response.wasSuccess = false;
    }

    if (response.wasSuccess) {
      response.message = t("registerUser");
      response.wasSuccess = true;
      closeModal(ModalsEnum.CREATE_USER);
      navigate('/forward-email')
    }

    showToast(response);

  }


  const handlerSave = async (user: FormType) => {
    console.log(user);
  }


  return <FormUserView name={ModalsEnum.CREATE_USER} handlerSaveWithBase64={handlerSaveWithBase64} handlerSave={handlerSave} title={t("createAccount")} isDeletable={false}></FormUserView>

}

export default RegisterUserPage;