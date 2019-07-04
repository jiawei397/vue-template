/*****  资源上传接口 ******/
import ajax from '../tools/ajax.js';
/**
 * 获取资源上传列表
 * @param {*} params 查询页数
 * {cdt: {fileKinds: [10, 16]}, orders: "CREATE_TIME DESC", pageNum: 1, pageSize: 8}
 */
export function getUploadList (params) {
  return ajax({
    method: 'post',
    data: params,
    url: '/dcFile/queryImportHisByCdt'
  });
}
