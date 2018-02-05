import config from '../config';
import BaseApi from '../api/baseApi';

const getControllerUrl = (controllerName, action) => {
    return `${config.apiBase}${controllerName}/${action || ''}`
};

class ControllerApi extends BaseApi {
    static get(action, params) {
        return super.get(getControllerUrl(this._name, action), params);
    }

    static post(action, payload) {
        return super.post(getControllerUrl(this._name, action), payload);
    }
}

export default ControllerApi;
