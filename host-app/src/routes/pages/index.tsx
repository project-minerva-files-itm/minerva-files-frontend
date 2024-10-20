
import { Page } from "bm-react-lib";
import settingspapages from "../../app_setting/routes";
import userspapages from "../../app_user/routes";
import homepages from "../../app_home/routes";

const pages: { [key: string]: Page } = {
    ...settingspapages,
    ...userspapages,
    ...homepages,
};

export default pages;