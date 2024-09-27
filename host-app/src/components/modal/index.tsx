import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { useModal } from '@hooks/index';



export interface ModalProps {
    name: string,
    title?: string | '',
    children: string | JSX.Element | JSX.Element[],
}

const AppModal: React.FC<ModalProps> = (props) => {

    const { modalState, closeModal } = useModal();

    return (
        <Dialog open={modalState[props.name]?.isOpen ?? false} onClose={() => closeModal(props.name)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative sm:mt-24 md:mt-24 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
                    > {/*sm:max-w-lg max-w-md sm:w-full*/}
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        {props.title}
                                    </DialogTitle>
                                    <div className="mt-2">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>


    );
}

export default AppModal;