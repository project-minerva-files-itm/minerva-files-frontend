import { useCallback } from 'react';

interface RequestConfig {
    method: string;
    headers: { [key: string]: string };
    body?: string | FormData;
}

export interface Parsers<T> {
    [key: string]: (data: unknown) => T;
}

/*const parseObj = <T,>(obj: any, parsers: Parsers<T>): T => {
    // Implementación de la función parseObj, aplicando parsers a los datos de respuesta.
    // Ejemplo básico: simplemente retornando el objeto sin procesar.
    // Deberías aplicar aquí las funciones de parsers según la lógica definida.
    return obj;
};*/

type HttpClient = (url: string, config: RequestConfig) => Promise<Response>;

export const useApiClient = (httpClient: HttpClient = fetch) => {

    const req = useCallback(
        async <T,>(
            method: string,
            route: string,
            body?: unknown,
            hardToken: string = '',
            type: string = 'application/json',
            parsers: Parsers<T> = {},
        ): Promise<T> => {
            const requestConfig: RequestConfig = {
                method,
                headers: {
                    'Content-Type': type,
                    'Accept': type,
                },
            };

            if (hardToken) {
                requestConfig.headers['Authorization'] = `Bearer ${hardToken}`;
            }

            if (body && type === 'application/json') {
                requestConfig.body = JSON.stringify(body);
            } else if (body) {
                requestConfig.body = body as string | FormData;
            }

            console.log("XXXXXXXXXXXXXXXXXXXX")
            console.log("hardToken ", hardToken)
            console.log(requestConfig.headers['Authorization']);
            console.log(requestConfig);

            try {

                const response = await httpClient(route, requestConfig);
                let responseBody: T;

                if (type === 'application/pdf') {
                    responseBody = (await response.blob()) as unknown as T;
                } else {
                    responseBody = await response.json();
                }

                if (Object.keys(parsers).length === 0) {
                    return responseBody;
                }

                return responseBody;//parseObj(responseBody, parsers);
            } catch (error) {
                console.error('API request failed:', error);
                throw error;
            }
        },
        [httpClient]
    );

    const client = {
        get: <T,>(route: string, type?: string, body?: unknown, hardToken?: string, parsers?: Parsers<T>) =>
            req<T>('GET', route, body, hardToken, type, parsers),

        getToken: <T,>(route: string, type?: string, body?: unknown, hardToken?: string, parsers?: Parsers<T>) =>
            req<T>('GET', route, body, hardToken, type, parsers),

        post: <T,>(route: string, body?: unknown, hardToken?: string, type?: string, parsers?: Parsers<T>) =>
            req<T>('POST', route, body, hardToken, type, parsers),

        put: <T,>(route: string, body?: unknown, hardToken?: string, type?: string, parsers?: Parsers<T>) =>
            req<T>('PUT', route, body, hardToken, type, parsers,),

        patch: <T,>(route: string, body?: unknown, hardToken?: string, type?: string, parsers?: Parsers<T>) =>
            req<T>('PATCH', route, body, hardToken, type, parsers),

        delete: <T,>(route: string, body?: unknown, hardToken?: string, type?: string, parsers?: Parsers<T>) =>
            req<T>('DELETE', route, body, hardToken, type, parsers),
    };

    return client;
};
