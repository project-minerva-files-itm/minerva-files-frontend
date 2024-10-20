import useApiLogin from "../../../../hooks/services/api_login";
import { useLoader, useModal, useToastNotification } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { FormType } from "../../components/form/types/type_form";
import { ModalsEnum } from "../../../../enums/modals_enum";
import FormUserUpdateView from "../../components/form_edit";

import useGetAuth from "@hooks/data/get_login";

const UpdateUserPage: React.FC = () => {

  const { t, i18n } = useTranslation();
  const showToast = useToastNotification();
  const loader = useLoader();
  const { updated } = useApiLogin();
  const { closeModal } = useModal();
  const { modalState } = useModal();
  const data = modalState[ModalsEnum.UPDATE_USER].data;
  const auth = useGetAuth();

  const handlerSave = async (user: FormType) => {

    loader.showLoader();
    user.language = i18n.language;
    user.userName = user.email;
    user.id = data["id"];
    const response = await updated(user, auth.token);
    loader.hideLoader();

    response.message = t("updated");
    response.wasSuccess = true;
    closeModal(ModalsEnum.UPDATE_USER);

    showToast(response);

  }

  return <FormUserUpdateView data={data} name={ModalsEnum.UPDATE_USER} handlerSave={handlerSave} title={t("edit")} isDeletable={false}></FormUserUpdateView>

}

export default UpdateUserPage;