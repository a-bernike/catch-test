import axios, { AxiosRequestConfig, Method } from 'axios';
import { TObject } from 'models';

interface Payload {
    type?: string,
    headers?: Object,
    body?: Object,
    params?: Object
}

export const apiInstance = axios.create({
    baseURL: '',
    timeout: 60000,
    validateStatus: status => status >= 200 && status < 300
});

class ApiRequest {
    static get(route: string, payload: Payload = {}) {
        return this.request('GET', route, payload);
    }

    static put(route: string, payload: Payload = {}) {
        return this.request('PUT', route, payload);
    }

    static post(route: string, payload: Payload = {}) {
        return this.request('POST', route, payload);
    }

    static delete(route: string, payload: Payload = {}) {
        return this.request('DELETE', route, payload);
    }

    static patch(route: string, payload: Payload = {}) {
        return this.request('PATCH', route, payload);
    }

    static resolveParams(params: TObject = {}) {
        const paramsResult: Array<string> = [];
        Object.keys(params).map(e => paramsResult.push(`${e}=${params[e]}`));
        return paramsResult.join('&');
    }

    static request(method: Method, route: string, payload: Payload = {}) {
        return new Promise((resolve, reject) => {
            const params: string = payload.params
            ? `?${this.resolveParams(payload.params)}`
            : '';
            let baseHeaders: Object = {
                'Content-Type':
                payload.type === 'form-data'
                    ? 'multipart/form-data'
                    : 'application/json'
            };
            if(payload.headers) baseHeaders = {...payload.headers};

            const requestConfig: AxiosRequestConfig = {
                url: route + params,
                method,
                headers: baseHeaders
            }
            if (payload.body) requestConfig.data = payload.body;
            
            apiInstance.request(requestConfig)
            .then(res => {
                if (res && res.data) {
                    resolve(res.data);
                } else {
                    reject(
                        // new Error({
                        //     status: false,
                        //     message: 'Koneksi/Server Bermasalah'
                        // })
                        new Error("Koneksi/Server Bermasalah")
                    );
                }
            })
            .catch(err => {
                if (err && err.response && err.response.data) {
                    reject(err.response.data);
                } else if (err && err.response) {
                    reject(err.response);
                } else if (err) {
                    reject(err);
                }
            });
        });
    }
}

export default ApiRequest;
