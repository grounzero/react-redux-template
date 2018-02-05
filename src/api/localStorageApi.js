class LocalStorageApi {
    static getItem(name) {
        return localStorage.getItem(name);
    }

    static setItem(name, value) {
        localStorage.setItem(name, value);
    }

    static clear() {
        return new Promise(resolve => {
            try {
                resolve(localStorage.clear());
            } catch (error) {
                throw new Error(error.message);
            }
        });
    }
}

export default LocalStorageApi;