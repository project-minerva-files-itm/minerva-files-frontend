import { Page } from "bm-react-lib";
import ANSPage from "../pages/ans";
import ANSDocumentPage from "../pages/ans_documents";

const pages: { [key: string]: Page } = {
  App: {
    name: "ANS",
    path: "/ans",
    element: <ANSPage />,
  },
  ANSDocumentPage: {
    name: "ANSDocumentPage",
    path: "/ans_document",
    element: <ANSDocumentPage />,
  },
}

export default pages;