/**
 * 获取数据中心列表
 */
import ajax from '../tools/ajax.js';

/**
 * 获取数据中心列表
 */
export function queryPage (pageSize, pageNum) {
  var obj = {
    pageNum: pageNum,
    pageSize: pageSize,
    orders: '',
    cdt: {
      ciQ: ['ATTR'],
      classId: 1
    }
  };
  return ajax({
    method: 'post',
    url: 'dataCenter/queryPage',
    data: obj
  });
}
/***************************************数据中心管理**************************************************/
/*
*确认和新增确认
 */
export function onCreateScene (censeId, id, name, picurl, desc) {
  let obj = {
    'id': censeId, 'ciCode': id, 'name': name, 'picUrl': picurl || '', 'desc': desc || ''
  };
  return ajax({
    method: 'post',
    url: 'dataCenter/create',
    data: obj
  });
}
/*
*图片上传的新增
 */
export function onUpImgPrSaveAjax (file) {
  var obj = {
    file: file
  };
  return ajax({
    method: 'post',
    url: 'dataCenter/receivePic',
    data: obj,
    isFile: true
  });
}
/*
*删除
 */
export function sceneDelete (classId) {
  return ajax({
    method: 'post',
    url: 'dataCenter/delete',
    data: classId
  });
}
/*
*数据中心管理数据上传
*/
/*
*3dMax上传
 */
export function upload3dmaxToServer (id, file, errorFun) {
  var obj = {
    file: file
  };
  return ajax({
    method: 'post',
    isFile: true,
    url: 'dcFile/uploadScense/' + id,
    data: obj,
    errorFun: errorFun
  });
}
/**
 * 上传visio
 * @author CNL
 * @param file
 */
export function uploadVisioToServer (id, file, errorFun) {
  var obj = {
    file: file
  };
  return ajax({
    method: 'post',
    isFile: true,
    url: 'dcFile/uploadVisio/' + id,
    data: obj,
    errorFun: errorFun
  });
}
/**
 * 上传贴图  -- 数据资源
 * @author CNL
 * @param fun
 */

export function uploadPicToServer (dcId, file, errorFun) {
  var obj = {
    file: file
  };
  return ajax({
    isFile: true,
    method: 'post',
    url: 'dcFile/importPicForDc/' + dcId,
    data: obj,
    errorFun: errorFun
  });
}
//上传记录  全局资源 部分
export function uploadHistory (pageNum, pageSize, fileKinds, dcId) {
  let obj = {
    pageNum: pageNum,
    pageSize: pageSize,
    orders: 'CREATE_TIME DESC',
    cdt: {
      fileKinds: fileKinds,
      dcId: dcId
    }
  };
  return ajax({
    method: 'post',
    url: 'dcFile/queryImportHisByCdt',
    data: obj
  });
}

//获取后台语言，目前只用来作为后台是否有license校验
export function getBackInitLanguage () {
  return ajax({
    'url': 'systemSource/getBackInitLanguage',
    'type': 'GET'
  });
}
