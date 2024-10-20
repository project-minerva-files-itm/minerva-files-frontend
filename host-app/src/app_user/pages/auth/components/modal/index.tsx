import { AppModal } from "@components/index";
import { useModal } from "@hooks/index";
import { ModalsEnum } from "../../../../enums/modals_enum";
import RegisterUserPage from "../../pages/register";
import { useTranslation } from "react-i18next";

const AuthRegisterModal: React.FC = () => {

  const { t } = useTranslation();
  const { modalState, openModal } = useModal();

  return <>
    <a onClick={() => openModal(ModalsEnum.CREATE_USER)} className="a">
      {t("createAccount")}
    </a>
    {
      modalState[ModalsEnum.CREATE_USER]?.isOpen ? (
        <AppModal name={ModalsEnum.CREATE_USER}>
          <RegisterUserPage />
        </AppModal>
      ) : null
    }

    {
      /* modalState[ModalsEnum.UPDATE_COMPANY]?.isOpen ? (
         <AppModal name={ModalsEnum.UPDATE_COMPANY}>
           <UpdateCompanyPage
             title={title}
             name={ModalsEnum.UPDATE_COMPANY}
           ></UpdateCompanyPage>
         </AppModal>
       ) : null*/
    }
  </>;
}

export default AuthRegisterModal;