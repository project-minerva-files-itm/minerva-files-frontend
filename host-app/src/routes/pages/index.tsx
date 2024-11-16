
import { Page } from "bm-react-lib";
import settingspapages from "../../app_setting/routes";
import userspapages from "../../app_user/routes";
import homepages from "../../app_home/routes";
import anspages from "../../app_ans/routers";

const pages: { [key: string]: Page } = {
    ...settingspapages,
    ...userspapages,
    ...homepages,
    ...anspages
};

export default pages;