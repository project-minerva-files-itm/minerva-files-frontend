import { ColumnDef } from "@tanstack/react-table";
import { PlusIcon, ArrowPathIcon, XCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { AppButton, AppPagination, LayoutHeadModal } from "bm-react-lib";
import { Form } from "react-final-form";
import { FormApi } from "final-form";
import { useTableConfig, useModal, useLoader } from "@hooks/index";
import useGetDocumentType from "../../../../hooks/data/get_typedocument";
import { AppTableBody, AppTableHead } from "../../../../../components/table";
import { DocumentType } from "../../../../models/documentype";
import { calculatePagination } from "@utils/index";
import { AppModal } from "@components/index";
import { ModalsEnum } from "../../../../enums/modals_enum";
import DocumentTypePage from "../../pages/update";
import { useTranslation } from "react-i18next";
import CreateDocumentTypePage from "../../pages/create";


interface TableViewProps {
  columns: ColumnDef<DocumentType, unknown>[];
  onPaginate: (url: string, record: number) => void;
  onFilter: (url: string) => void;
}

const TableView: React.FC<TableViewProps> = (props) => {
  const { t } = useTranslation();
  const title = t("typeDocuments");
  const loader = useLoader();
  const type = useGetDocumentType();
  const data = type.data as Array<DocumentType>;
  const columns = props.columns;
  const { modalState, openModal, closeModal } = useModal();
  console.log("UUUUUUUU",data)
  const table = useTableConfig({ data, columns });
  const pagination = calculatePagination(type.pagination) as Record<
    string,
    string
  >;


  const onSubmit = (data: unknown) => props.onFilter(JSON.stringify(data));

  const onReset = (form: FormApi<unknown>) => {
    form.reset();
    props.onFilter("");
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <LayoutHeadModal title={title}>
              <span className="sm:ml-3">
                <AppButton
                  context={loader}
                  onClick={() => {
                    openModal(ModalsEnum.CREATE_DOCUMENT_TYPE);
                  }}
                  text={t("new")}
                  className="app-button-base"
                  child={
                    <PlusIcon
                      aria-hidden="true"
                      className="app-icon-base text-green-600"
                    />
                  }
                ></AppButton>
                <AppButton
                  onClick={() => onReset(form)}
                  context={loader}
                  text={t("refresh")}
                  className="app-button-base"
                  child={
                    <ArrowPathIcon
                      aria-hidden="true"
                      className="app-icon-base text-blue-600"
                    />
                  }
                ></AppButton>

                <AppButton
                  context={loader}
                  className="app-button-base"
                  text="Cancel"
                  onClick={() => closeModal(ModalsEnum.DOCUMENT_TYPE)}
                  child={
                    <XCircleIcon
                      aria-hidden="true"
                      className="app-icon-base text-orange-400"
                    />
                  }
                ></AppButton>

              </span>
            </LayoutHeadModal>
            <AppPagination
              labelOf={t("of")}
              labelTotal={t("records")}
              labelPage={t("page")}
              from={pagination.pFrom}
              to={pagination.pTo}
              total={pagination.pTotal}
              currentPage={pagination.pCurrentPage}
              lastPage={pagination.pLastPage}
              childPrevious={
                <a
                  onClick={() => props.onPaginate(pagination.pBackPage, 10)}
                  className="app-pagination-previous"
                >
                  {t("previous")}
                </a>
              }
              childNext={
                <a
                  onClick={() => props.onPaginate(pagination.pNextPage, 10)}
                  className="app-pagination-next"
                >
                  {t("next")}
                </a>
              }
            ></AppPagination>
            <div className="overflow-x-auto styled-table">
              <table className="app-table">
                <thead className="app-thead">
                  <AppTableHead
                    handleSubmit={handleSubmit}
                    table={table.getHeaderGroups()}
                  ></AppTableHead>
                </thead>
                <tbody>
                  <AppTableBody table={table.getRowModel()}></AppTableBody>
                </tbody>
              </table>
            </div>
          </form>
        )}
      </Form>

      <AppModal name={ModalsEnum.CREATE_DOCUMENT_TYPE}>
        <CreateDocumentTypePage
          title={"Tipo de documento"}
          name={ModalsEnum.CREATE_DOCUMENT_TYPE}
          id={modalState[ModalsEnum.DOCUMENT_TYPE].data.id}
        ></CreateDocumentTypePage>
      </AppModal>

      {modalState[ModalsEnum.UPDATE_TYPE]?.isOpen ? (
        <AppModal name={ModalsEnum.UPDATE_TYPE}>
          <DocumentTypePage
            title={title}
            name={ModalsEnum.UPDATE_TYPE}
          ></DocumentTypePage>
        </AppModal>
      ) : null}
    </div>

  );
};

export default TableView;
