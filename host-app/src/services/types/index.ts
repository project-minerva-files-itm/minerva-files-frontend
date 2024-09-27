import { Pagination } from "./pagination";

export interface ApiResponse<T = unknown> {
    wasSuccess: boolean;
    message: string | null;
    data: T | T[];
    pagination: Pagination | null;
}