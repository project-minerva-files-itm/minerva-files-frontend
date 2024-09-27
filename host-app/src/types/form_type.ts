export interface FormProps<T> {
    title: string,
    name: string,
    data?: T,
    handlerSave: (data: T) => void,
    handlerDelete?: (data: T) => void;
    isDeletable: boolean;
}