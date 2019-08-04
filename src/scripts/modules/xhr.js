export default class Xhr {
    constructor() {
        this.xhr = {};
        this.xhr_counter = 0;
    }

    request(url, {
        method = 'GET',
        responseType,
        body = '',
        headers,
        withCredentials
    } = {}, progressCallback = () => {}) {

        let xhr_index = this.xhr_counter++;
        this.xhr[xhr_index] = new XMLHttpRequest();
        this.xhr[xhr_index].responseType = responseType || 'text';
        this.xhr[xhr_index].withCredentials = withCredentials || false;

        this.xhr[xhr_index].addEventListener('progress', e => {
            if (typeof progressCallback === 'function') progressCallback(e);
        });

        return new Promise((resolve, reject) => {
            this.xhr[xhr_index].addEventListener('load', e => {
                delete this.xhr[xhr_index];
                resolve(e);
            });
            this.xhr[xhr_index].addEventListener('abort', e => {
                delete this.xhr[xhr_index];
                reject(e);
            });
            this.xhr[xhr_index].addEventListener('error', e => {
                delete this.xhr[xhr_index];
                reject(e);
            });
            this.xhr[xhr_index].addEventListener('timeout', e => {
                delete this.xhr[xhr_index];
                reject(e);
            });

            this.xhr[xhr_index].open(method, url, true);

            if (headers) {
                for (let header in headers) {
                    this.xhr[xhr_index].setRequestHeader(header, headers[header]);
                }
            }

            this.xhr[xhr_index].send(body);
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