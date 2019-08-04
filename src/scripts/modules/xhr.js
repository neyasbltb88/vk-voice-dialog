export default class Xhr {
    constructor() {
        this.xhr = {};
        this.xhr_counter = 0;
    }

    request(url, params = {}) {
        let xhr_index = ++this.xhr_counter;
        this.xhr[xhr_index] = new XMLHttpRequest();
        // log.dev('xhr_index: ', xhr_index);

        this.xhr[xhr_index].withCredentials = params.withCredentials || false;
        this.xhr[xhr_index].responseType = params.responseType || 'text';
        this.xhr[xhr_index].timeout = params.timeout || -0;

        let method = params.method || 'GET';
        let async = params.async === false ? false : true;
        let data = params.data || '';

        return new Promise((resolve, reject) => {
            this.xhr[xhr_index].open(method, url, async);

            this.xhr[xhr_index].addEventListener('load', e => {
                // Если сервер ответил не 200
                if (e.target.status != 200) {
                    delete this.xhr[xhr_index];
                    reject({
                        reason: `Status: ${e.target.status}`,
                        event: e
                    });

                    return;
                }

                // Если все хорошо
                delete this.xhr[xhr_index];
                resolve(e);
            });

            this.xhr[xhr_index].addEventListener('error', e => {
                delete this.xhr[xhr_index];
                reject({
                    reason: `Error`,
                    event: e
                });
            });

            this.xhr[xhr_index].addEventListener('abort', e => {
                delete this.xhr[xhr_index];
                reject({
                    reason: `Abort`,
                    event: e
                });
            });

            this.xhr[xhr_index].addEventListener('timeout', e => {
                delete this.xhr[xhr_index];
                reject({
                    reason: `Timeout`,
                    event: e
                });
            });

            this.xhr[xhr_index].send(data);
        });
    }

    abort() {
        for (let _xhr in this.xhr) {
            this.xhr[_xhr].abort();
            delete this.xhr[_xhr];
        }

        return true;
    }
}