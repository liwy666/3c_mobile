import axios from 'axios';
import Qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://api.ganglonggou.com/api/v1';
//axios.defaults.baseURL = 'http://api.ganglonggou.com:7001/api/v1';
//axios.defaults.baseURL = 'https://test-api.ganglonggou.com/api/v1';

//引入lib-flexible
import 'lib-flexible';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        config.validateStatus = function (status) {
            return status >= 200 && status <= 400; // 默认的
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.error_code !== undefined) {
            console.log(response.data.msg);
            return false;
        } else {
            return response.data;
        }
    },
    error => {
        console.log("发生未知错误" + error);
        return false;
    }
);


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装单个图片上传方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function imgUpload(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(data))
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}