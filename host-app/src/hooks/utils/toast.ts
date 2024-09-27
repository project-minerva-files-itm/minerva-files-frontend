import { useCallback } from 'react';
import { toast } from 'react-toastify';


const useToastNotification = () => {
    const showToast = useCallback((result: { wasSuccess?: boolean | undefined, message?: string | null }) => {
        console.log("estadoooo ",result)
        switch (result.wasSuccess) {
            case true:
                toast.success(result.message);
                break;
            case false:
                toast.error(result.message);
                break;
            default:
                toast.info(result.message ?? "");
                break;
        }
    }, []);

    return showToast;
};

export default useToastNotification;
