import { ThemeContextProps } from "bm-react-lib";
import { createContext } from "react";

export const DarkContext = createContext<ThemeContextProps | undefined>(undefined);
