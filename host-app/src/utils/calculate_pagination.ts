import { Pagination } from "@response/pagination";


export const calculatePagination = (pagination: Pagination | null): Record<string, string> => {
    if (!pagination || pagination.records === 0) {
        return {};
    }

    const { records = 0, page = 1, total = 0 } = pagination;

    const ptotal = total as number;

    const from = (records * (page - 2)) + 1; // Primer registro en la página actual (añadido 1 para que empiece en 1)

    const to = Math.min(records * (page - 1), ptotal); // Último registro (asegurado de no superar el total)

    const currentPage = page;
    const lastPage = Math.ceil(ptotal / records); // Aseguramos redondeo hacia arriba
    const pFrom = from.toString();
    const pTo = to.toString();
    const pCurrentPage = (currentPage - 1).toString();
    const pLastPage = lastPage.toString();
    const pTotal = ptotal.toString();
    const pBackPage = Math.max(page - 1, 1).toString();
    const pNextPage = Math.min(page, lastPage).toString();

    return { pFrom, pTo, pCurrentPage, pLastPage, pTotal, pBackPage, pNextPage };
};