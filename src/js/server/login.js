/**
 * 获取用户信息
 */
import ajax from '../tools/ajax.js';

/**
 * 刷新token
 */
export function refreshTokenAjax () {
  return ajax({
    url: 'sso/client/oauth/refreshToken'
  });
}

/**
 * 登陆
 */
export function login (loginCode, password) {
  return ajax({
    method: 'post',
    data: {
      loginCode,
      password
    },
    url: 'user/oauth/login'
  });
}

/**
 * 登出
 */
export function logout () {
  return ajax({
    method: 'post',
    url: 'user/oauth/logout'
  });
}

/**
 * 登陆
 */
export function getPicture () {
  return ajax({
    method: 'post',
    url: 'sys/variable/queryVariableList'
  });
}
