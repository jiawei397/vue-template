/**
 * 获取左侧菜单和顶部菜单及用户信息
 */
import ajax from '../tools/ajax.js';

/**
 * 获取图标、图片等信息
 */
export function getLogos () {
  return ajax({
    method: 'post',
    url: 'sys/variable/queryVariableList'
  });
}

/**
 * 获取左侧菜单
 */
export function getMenus () {
  return ajax({
    // isMock: true,
    type: 'post',
    url: 'sys/vframe/queryAuthMenuTreeNodes'
  });
}

/**
 * 移除收藏
 * @param {*} id 收藏菜单的id的code值
 */
export function removeFavorite (id) {
  return ajax({
    method: 'post',
    data: {menuId: id},
    url: 'sys/vframe/unenshrineMenu'
  });
}

/**
 * 添加收藏
 * @param {*} id 收藏菜单的id的code值
 */
export function addFavorite (id) {
  return ajax({
    method: 'post',
    data: {menuId: id},
    url: 'sys/vframe/enshrineMenu'
  });
}

/**
 * 获取用户信息
 */
export function getCurUser () {
  return ajax({
    method: 'post',
    url: 'integration/authority/getCurUser'
  });
}

/**
 * 获取用户详细信息，包括图标
 * @param {String} id 用户信息的id值
 */
export function getLoginUserInfoById (id) {
  return ajax({
    method: 'post',
    url: 'user/getLoginUserInfoById',
    data: id + ''
  });
}
