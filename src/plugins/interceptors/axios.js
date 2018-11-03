import { ajaxCtx } from '@/config/config.js'

// 请求成功拦截
export function requestSuccessFunc (requestObj) {
    requestObj.url = ajaxCtx + requestObj.url;
    return requestObj
}


// 请求失败拦截
export function requestFailFunc (requestError) {
    return Promise.reject(requestError)
}

// 响应请求拦截
export function responseSuccessFunc (responseObj) {
    return responseObj
}

// 响应失败拦截
export function responseFailFunc (responseError) {
    return Promise.reject(responseError)
}