/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import { toast } from 'react-toastify'

const ToastMessage = ({ message, type }) => {
    switch (type) {
        case "success":
            return toast.success(
                <>
                    <Typography>
                        {message}
                    </Typography>
                </>
            )


        case "error":
            return toast.error(
                <>
                    <Typography>
                        {message}
                    </Typography>
                </>
            )
        default:
            return null;

    }
}
export default ToastMessage