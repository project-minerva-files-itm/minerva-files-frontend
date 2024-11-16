import { Cog6ToothIcon, PencilIcon } from "@heroicons/react/16/solid";
import { useLoader, useModal, useTheme } from "@hooks/index";
import { AppButton } from "bm-react-lib";
import React from "react";
import { useTranslation } from "react-i18next";
import { UserJwtPayload } from "../../../../../../types/user_jwt_payload";
import { AppModal } from "@components/index";
import { ModalsEnum } from "../../../../../enums/modals_enum";
import UpdateUserPage from "../../update";



interface AuthSettingProps {
  user: UserJwtPayload | null,
  logout: () => void
  edit: () => void
  onPassword: () => void
}

const AuthSetting: React.FC<AuthSettingProps> = ({ logout, user, edit, onPassword }) => {

  const theme = useTheme();
  const loader = useLoader();
  const { t } = useTranslation();
  const { modalState } = useModal();

  return (
    <>
      <div className="w-full max-w-sm">
        <div className="flex justify-end px-4">
          <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.Photo} alt="" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user?.FirstName} {user?.LastName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user?.Rol}
          </span>
          <div className="flex mt-4 md:mt-6">
            <ul>
              <li className="mt-2 md:mt-2">
                <AppButton
                  onClick={() => edit()}
                  context={loader}
                  text={t("edit")}
                  child={<PencilIcon
                    style={{ width: 24, color: theme.isDark ? "white" : "black" }} />}
                >
                </AppButton>
              </li>
              <li className="mt-2 md:mt-2">
                <AppButton
                  onClick={() => onPassword()}
                  context={loader}
                  text={t("resetPassword")}
                  child={<PencilIcon
                    style={{ width: 24, color: theme.isDark ? "white" : "black" }} />}
                >
                </AppButton>
              </li>
              <li className="mt-2 md:mt-2">
                <AppButton
                  onClick={() => logout()}
                  context={loader}
                  text={t("logout")}
                  child={<Cog6ToothIcon

                    style={{ width: 24, color: theme.isDark ? "white" : "black" }} />}
                >
                </AppButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        modalState[ModalsEnum.UPDATE_USER]?.isOpen ? (
          <AppModal name={ModalsEnum.UPDATE_USER}>
            <UpdateUserPage />
          </AppModal>
        ) : null
      }

    </>
  )


};

export default AuthSetting;
