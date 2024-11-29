import { Page } from "bm-react-lib";
import RequestPage from "../pages/Request";
import RequestsuccessPage from "../pages/requestSuccess";
import TableRequestPageProps from "../pages/Request/pages/select";


const pages: { [key: string]: Page } = {
  Request: {
    name: "Request",
    path: "/request",
    element: <RequestPage />,
  },
  RequestSuccess: {
    name: "success",
    path: "/request_success",
    element: <RequestsuccessPage />,
  },
  RequestList: {
    name: "list",
    path: "/request_list",
    element: <TableRequestPageProps />,
  }
}

export default pages;