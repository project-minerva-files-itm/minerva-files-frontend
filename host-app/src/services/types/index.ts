import { Pagination } from "./pagination";

export interface ApiResponse<T = unknown> {
    status?: number;
    wasSuccess: boolean;
    message: string | null;
    data: T | T[];
    pagination: Pagination | null;
}