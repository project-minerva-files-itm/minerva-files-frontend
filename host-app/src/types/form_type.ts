export interface FormProps<T> {
    title: string,
    name: string,
    data?: T,
    handlerSave: (data: T) => void,
    handlerDelete?: (data: T) => void;
    handlerSaveWithBase64?: (data: T, base64: string) => void,
    isDeletable: boolean;
}