import { toastr } from 'react-redux-toastr';

export const toastrSuccess = (action, message, options) => toastr.success(action, message, options);
export const toastrError = (action, message, options) => toastr.error(action, message, options);
export const toastrConfirm = (message, confirmOptions) => toastr.confirm(message, confirmOptions);