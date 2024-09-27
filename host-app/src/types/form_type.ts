export interface FormProps<T> {
    title: string,
    name: string,
    data?: T,
    handlerSave: (data: T) => void
}