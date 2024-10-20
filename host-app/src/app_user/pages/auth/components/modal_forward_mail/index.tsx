import { AppModal } from "@components/index";
import { useModal, useTheme } from "@hooks/index";
import { ModalsEnum } from "../../../../enums/modals_enum";
import { ButtonProps } from "@headlessui/react";
import SettingAuthPage from "../../pages/setting";
import { AppNavButton } from "bm-react-lib";
import { Cog6ToothIcon } from "@heroicons/react/16/solid";

const AuthForwardModal: React.FC<ButtonProps> = () => {

  const theme = useTheme();
  const { modalState, openModal } = useModal();

  return <>
    <AppNavButton
      className="switch-2">
      <Cog6ToothIcon
        onClick={() => openModal(ModalsEnum.SETTING_USER)}
        style={{ width: 24, color: theme.isDark ? "white" : "black" }} />
    </AppNavButton>
    {
      modalState[ModalsEnum.SETTING_USER]?.isOpen ? (
        <AppModal name={ModalsEnum.SETTING_USER}>
          <SettingAuthPage />
        </AppModal>
      ) : null
    }
  </>;
}

export default AuthForwardModal;