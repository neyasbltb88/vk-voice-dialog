export default class Xhr {
    constructor() {
        this.xhr = {};
        this.xhr_counter = 0;
    }

    request(url, {
        method = 'GET',
        responseType = 'text',
        body = '',
        headers,
        withCredentials = false
    } = {}, progressCallback = () => {}) {

        let xhr_index = this.xhr_counter++;
        this.xhr[xhr_index] = new XMLHttpRequest();

        this.xhr[xhr_index].addEventListener('progress', e => {
            if (typeof progressCallback === 'function') progressCallback(e);
        });

        return new Promise((resolve, reject) => {
            this.xhr[xhr_index].addEventListener('load', e => {
                delete this.xhr[xhr_index];
                console.timeEnd(`XHR id:${xhr_index}`);
                resolve(e);
            });
            this.xhr[xhr_index].addEventListener('abort', e => {
                delete this.xhr[xhr_index];
                console.timeEnd(`XHR id:${xhr_index}`);
                reject(e);
            });
            this.xhr[xhr_index].addEventListener('error', e => {
                delete this.xhr[xhr_index];
                console.timeEnd(`XHR id:${xhr_index}`);
                reject(e);
            });
            this.xhr[xhr_index].addEventListener('timeout', e => {
                delete this.xhr[xhr_index];
                console.timeEnd(`XHR id:${xhr_index}`);
                reject(e);
            });

            console.time(`XHR id:${xhr_index}`);
            console.timeLog(`XHR id:${xhr_index}`);
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
        for (let xhr_index in this.xhr) {
            this.xhr[xhr_index].abort();
            delete this.xhr[xhr_index];
            console.timeEnd(`XHR id:${xhr_index}`);
        }

        return true;
    }
}