/**
 * 获取角色管理数据
 */
import ajax from '../tools/ajax.js';
import globals from '../globals';

/**
 * 分页查询角色数据
 * @param {Object} params {"cdt":{"roleName":""},"pageNum":1,"pageSize":30
 * cdt：查询条件，搜索时用
 */
export function queryRolePage (params) {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    data: params,
    url: 'role/queryRolePage'
  });
}

/**
 * 保存权限的新建和编辑
 * @param {Object} params {"role":{"roleCode":"zmj","roleName":"zmj","roleDesc":"zmj","id":"2910753189540003"}}
 * roleCode：角色名称
 * roleName：角色名称
 * roleDesc：角色描述
 * id：新增角色时不传，保存时传
 */
export function saveOrUpdateRole (params) {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    data: {
      'role': {...params}
    },
    url: 'role/saveOrUpdateRole'
  });
}

/**
 * 删除某一条数据
 * @param {String} id 某一条的id值
 */
export function removeRoleById (id) {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    data: id,
    url: 'role/removeRoleById'
  });
}

/**
 * 获取所有功能菜单
 */
export function queryAuthMenuTree () {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    url: 'menu/queryAuthMenuTree'
  });
}

/**
 * 根据角色主键查询角色对应的菜单id
 * @param {String} id 角色id
 * @return [Array] ids
 */
export function getRoleMenuIds (id) {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    data: id,
    url: 'role/getRoleMenuIds'
  });
}

/**
 * 保存功能权限的修改
 * @param {Array} id id
 * @param {Array} menus 菜单id
 */
export function saveFunAuth (id, menus) {
  return ajax({
    baseURL: globals.baseApi,
    method: 'post',
    data: {
      'role': {'id': id},
      'menus': menus.map((id) => {
        return {
          id: id
        };
      })
    },
    url: 'role/saveFunAuth'
  });
}

/**
 * 获取所有数据中心名称
 * @param {String} roleId 角色id
 */
export function getAllDataCenterNames (roleId) {
  return ajax({
    method: 'post',
    data: {
      roleId
    },
    url: 'dataCenter/getAllDataCenterNames'
  });
}

/**
 * 根据角色和场景id，获取对应数据
 * @param {String} roleId 角色id
 * @param {String} dcId 场景id
 */
export function queryAuthTreeByRoleIdAndDcId (roleId, dcId) {
  return ajax({
    method: 'post',
    data: {
      dcId,
      roleId
    },
    url: 'auth/queryAuthTreeByRoleIdAndDcId'
  });
}

/**
 * 数据功能权限的修改
 * @param {*} params
 */
export function fetchDataSave (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'auth/saveDcvAuth'
  });
}
