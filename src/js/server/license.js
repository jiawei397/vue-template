/**
 * 获取授权信息
 */

import ajax from '../tools/ajax.js';

/**
 * 获取授权机器码
 * @param {*} 无
 */
export function getLisCode () {
  return ajax({
    // isMock: true,
    method: 'post',
    url: 'license/auth/queryLicenseAuthInfo'
  });
}

/*
*生成二维码
*/
export function getQrCode () {
  return ajax({
    isOutFormat: true,
    method: 'post',
    url: 'license/auth/getQRCodeImage',
    data: ''
  });
}

/**
 * 删除ip
 * @param {String} ip
 */
export function removeServer (ip) {
  return ajax({
    isShowAlert: false,
    method: 'post',
    url: 'license/auth/removeServer',
    data: ip
  });
}

/**
 * 注册license
 * @param {String} registerCode 用户信息的id值
 */
export function registerLicense (registerCode) {
  return ajax({
    method: 'post',
    isShowAlert: false,
    url: 'license/auth/registerLicense',
    data: registerCode
  });
}
