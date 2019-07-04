import ajax from '../tools/ajax.js';
/**
 * @author zhuhongyan  2019.6.11
 * 获取模型库管理的数据
 * @param {*} type 如果为1代表是3D的模型库 为2 代表的是webgl的模型库
 * params = {pageNum: 1, pageSize: 12, orders: "", cdt: {stdName: ""}}
 */
export function queryProductPage (type, params) {
  return ajax({
    method: 'post',
    data: params,
    url: `dcModelItem/queryProductPage/${type}`
  });
}

/**
 * @author zhuhongyan  2019.6.11
 * 获取模型映射的数据
 * @param {*} params = {pageNum: 1, pageSize: 10, orders: "", cdt: {userModel: ""}}
 */
export function queryMappingPage (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dcModelItem/queryMappingPage'
  });
}
/**
 * @author zhuhongyan  2019.6.12
 * 获取修改模型映射所有数据列表
 */
export function queryItemNameList () {
  return ajax({
    method: 'post',
    url: 'dcModelItem/queryItemNameList'
  });
}
/**
 * @author zhuhongyan  2019.6.11
 * 获取模型映射的数据
 * @param {*} params = {ids: ["3030172459050769"]}
 */
export function deleteModels (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dcModelItem/deleteModels'
  });
}
/**
 * @author zhuhongyan  2019.6.12
 * 获取模型映射的数据
 * @param {*} params = {
        dcId: 0,
        id: '',
        itemId: '',
        mpType: 1,
        port3dm: '',
        userModel: ''
      }
 */
export function updateMapping (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dcModelItem/updateMapping'
  });
}

/**
 * @author zhuhongyan  2019.6.11
 * 获取模型映射的数据
 * @param {*} params = {ids: ["3030172459050769"]}
 */
export function deleteMapping (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dcModelItem/deleteMapping'
  });
}
/**
 * 下载端口模型映射
 */
export function exportPort () {
  return ajax({
    method: 'get',
    isDownLoad: true,
    url: 'dcModelItem/exportPort'
  });
}

/**
 * 下载模型映射
 */
export function exportMapping () {
  return ajax({
    method: 'get',
    isDownLoad: true,
    url: 'dcModelItem/exportMapping'
  });
}
