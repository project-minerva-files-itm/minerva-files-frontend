
import { Page } from "bm-react-lib";
import settingspapages from "../../app_setting/routes";
import userspapages from "../../app_user/routes";

const pages: { [key: string]: Page } = {
    ...settingspapages,
    ...userspapages,
};

export default pages;