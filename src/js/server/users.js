import ajax from '../tools/ajax.js';
import globals from '../globals';
/***************************************************************个人中心*************************************************************************/

/**
 * 个人图片上传
 */
export function saveOrUpdateUser (obj) {
  return ajax({
    baseURL: globals.baseApi,
    url: 'user/saveOrUpdateUser',
    method: 'post',
    data: obj
  });
}

/**
 * 保存
 */
export function updateCurUser (obj) {
  return ajax({
    baseURL: globals.baseApi,
    url: 'user/updateCurUser',
    method: 'post',
    data: obj
  });
}

//修改密码
export function resetUserPasswd (obj) {
  return ajax({
    baseURL: globals.baseApi,
    url: 'user/resetUserPasswd',
    method: 'post',
    data: obj
  });
}
