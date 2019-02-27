/**
 * Created by Emontian on 2019/2/27.
 * ajax请求发送模块
 */
import {message} from 'antd';
import axios from 'axios';
export default function ajax(url,data,method = 'GET') {
    let promise = null;
    if (method === 'GET'){
        promise = axios.get(url,{param:data})
    }else if(method === 'POST'){
        promise = axios.post(url, data)
    }
    return new Promise((reslove,reject)=> {
        promise.then(res => {
            reslove(res.data);
        })
            .catch(error => {
                console.log(error);
                message.error('当前网络不稳定')
            })
    })
}
