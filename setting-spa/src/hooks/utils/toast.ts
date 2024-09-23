import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useToastNotification = () => {
    const showToast = useCallback((result: { success?: boolean, message: string }) => {
        switch (result.success) {
            case true:
                toast.success(result.message);
                break;
            case false:
                toast.error(result.message);
                break;
            default:
                toast.info(result.message);
                break;
        }
    }, []);

    return showToast;
};

export default useToastNotification;
