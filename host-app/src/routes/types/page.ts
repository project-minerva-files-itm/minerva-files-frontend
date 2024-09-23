import { ReactElement } from "react";

export interface Page {
    element: ReactElement;
    name: string;
    path: string;
    mainFrame?: boolean;
}

export interface Pages {
    [key: string]: Page;
}
