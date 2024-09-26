import { Page } from "../types/page";
import settingspapages from "settingspa/pages";

const pages: { [key: string]: Page } = {
    ...settingspapages
};

console.log('HOLAA ',pages);

export default pages;