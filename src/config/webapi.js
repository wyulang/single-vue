import fly from 'flyio';
import env from './envConfig';
import { Message } from 'element-ui';
export class WebApi {
    constructor() {
        //拦截器,
        fly.interceptors.response.use(
            (response) => {
                //只将请求结果的data字段返回
                if (response.headers['content-type'].indexOf('excel') > -1) {
                    return response
                } else {
                    return response.data && JSON.parse(response.data);
                }
            },
            (err) => {
                // Message.error(err.message || this.errorMess);
                // return;
            }
        )
    }
    errorMess = "网络异常！请稍后重试"
    //请求主体
    request(url, data, method, header, responses) {
        let headers = this.getHeader(header);
        let configs = {
            method: method,
            headers: headers
        }
        if (responses) {
            configs.responseType = responses;
        }
        return fly.request(url, data, configs).catch(err => {
            Message.error(err.response.data.msg || this.errorMess);
            return err;
        })
    }
    /**
     * @desc get请注
     * @param json 当为对像时{isJson:是否为application/json} 当为string时（传值json）为application/json
     * @return type
     */
    getHeader(json = "") {
        let headerObj = {
            'Content-Type': "application/json"
        }
        if (typeof json === 'object') {
            Object.assign(headerObj, json);
        }
        Object.assign(headerObj, {
            'appmodelId': env.get('userInfo').appmodelId || "S00050001wx219007e82b660f17"
        })
        return headerObj;
    }

    get(url, data, config) {
        return this.requestConfig(url, data, 'get', config)
    }
    post(url, data, config) {
        return this.requestConfig(url, data, 'post', config);
    }
    put(url, data, config) {
        return this.requestConfig(url, data, 'PUT', config);
    }
    delete(url, data, config) {
        return this.requestConfig(url, data, 'delete', config)
    }
    all(param) {
        return fly.all(param);
    }
    getDomainApi(type) {
        switch (type) {
            case "groupmall":
                return env.get('groupmall');
            case "plat":
                return env.get('plat');
            default:
                return env.get('plat');
        }
    }
    /**
     * 请求处理
     * @param {*} url 
     * @param {*} data 
     * @param {*} method 
     * @param {*} config ----isUrl:"任意值"为不拼接地址，，，type:获取平台环境，如groupmall，plat，，，responseType:"bolo"
     */
    requestConfig(url, data, method, config = {}) {
        let getUrl = this.getDomainApi() + url, header = "", responseType = "";
        Object.keys(config).forEach(v => {
            if (v == "isUrl") {
                getUrl = url; // return https://www.superprism.cn/medusaplatform/MiniProgramy/seleCtcomplete 全址
            } else if (v == "type") {
                getUrl = this.getDomainApi(config[v]) + url;
            } else if (v == "header") {
                header = config[v];
            } else if (v == "responseType") {
                responseType = config[v];
            }
        })
        if (method == "delete") {
            let par = "?";
            if (typeof (data) == "object") {
                Object.keys(data).forEach((item, index) => {
                    par += `${index == 0 ? "" : "&"}${item}=${data[item]}`
                })
            } else {
                par += `data=${data}`
            }
            getUrl += par;
        }
        return this.request(getUrl, data, method, header, responseType)
    }
    /**
     * @method
     * @description 上传url
     * @param type 1001-图片类型文件  2001-音频类型文件  2002-视频类型文件  3001-文档类型文件  4001-证书类文件  5001-其他类型文件
     */
    getUploadUrl(type = 1001) {
        return env.uploadUrl + `${type}/${'projectName' && env.projectName}/${env.get('userInfo').appmodelId}`
    }
    getUser() {
        return window.sessionStorage.getItem('userInfo') || {};
    }
}

export default new WebApi();