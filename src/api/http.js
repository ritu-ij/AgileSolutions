import { checkHttpResponse } from "./httpResponseInterceptor";

const timeout = 15000;

export const httpFetch = (url, method, body, isAuthenticated = false, shouldReturnJSON = true, options = {}) => {
    var option = {
        ...options,
        method
    };
    if (body) {
        option['body'] = JSON.stringify(body)
    }
    let timer;
    option.headers = { ...option.headers, "content-type": "application/json" ,"Access-Control-Allow-Headers":'*'};
    return new Promise((resolve, reject) => {
        timer = setTimeout(() => {
                const error = {};
                error.message = 'Connection timeout';
                reject(error);
        }, timeout);

        fetch(url, option)
            .then(checkHttpResponse)
            .then(response => {
                if(response.status === '401'){
                    const error = {};
                    error.message = 'Unautharized user. Please login Again!';
                    //logOut();
                    reject(error);
                }
                clearTimeout(timer)
                resolve( shouldReturnJSON ? response.json() : response)
            })
            .catch(err => {
                clearTimeout(timer)
                const error = {};
                error.message = err.message;
                reject(error);
            });

    });
}