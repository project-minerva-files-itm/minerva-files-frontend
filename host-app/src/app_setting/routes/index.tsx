import { Page } from "bm-react-lib";
import App from "../../App";
import Company from "../pages/company";
import Department from "../pages/department";
import ActivityStatePage from "../pages/activity_state";
import RequestTypePage from "../pages/request_type";
import DocumentTypePage from "../pages/document_type";
import ActivityTypePage from "../pages/activity_type";
import EmployeView from "../pages/person/form";
import PersonDepartament from "../pages/person_department/form";

const pages: { [key: string]: Page } = {
  App: {
    name: "App",
    path: "/",
    element: <App />,
  },
  Company: {
    name: "Company",
    path: "/company",
    element: <Company />,
  },
  Department: {
    name: "Department",
    path: "/department",
    element: <Department />,
  },
  Activities: {
    name: "ActivityStatePage",
    path: "/activities",
    element: <ActivityStatePage />,
  },
  RequestType: {
    name: "RequestTypePage",
    path: "/requestType",
    element: <RequestTypePage />,
  },
  DocumentType: {
    name: "DocumentTypePage",
    path: "/documentType",
    element: <DocumentTypePage />,
  },
  ActivityType: {
    name: "ActivityTypePage",
    path: "/activityType",
    element: <ActivityTypePage />,
  },
  EmployeView: {
    name: "EmployeView",
    path: "/employe",
    element: <EmployeView />,
  },
  PersonDepartament: {
    name: 'PersonDepartament',
    path: '/person-departament',
    element: <PersonDepartament />,
  }

};

export default pages;
