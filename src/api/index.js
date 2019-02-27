/**
 * Created by Emontian on 2019/2/27.
 * 发送ajax请求的所有封装函数
 */

import ajax from './ajax';

export const ajaxLogin = (data) =>  ajax('/login',data, 'POST');
