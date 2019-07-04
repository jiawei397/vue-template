import ajax from '../tools/ajax';

/**
 * 获取数据校验规则
 * @param {*} params 如： ['RACK']
 */
export function getDcCiCheckRule (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dataCheck/queryDcCiCheckRule'
  });
}

/**
 * 获取数据校验规则
 * @param {*} params 如： ['RACK']
 */
export function getDcCiCheckDataInfoPage (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dataCheck/queryDcCiCheckDataInfoPage'
  });
}

/**
 * 保存错误修改
 * @param {*} params 如： ['RACK']
 */
export function saveOrUpdateCiBatch (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dataCheck/saveOrUpdateCiBatch'
  });
}

/**
 * 保存错误修改
 * @param {*} params 如： ['RACK']
 */
export function removeCheckDataByIds (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dataCheck/removeCheckDataByIds'
  });
}

/**
 * 保存错误修改
 * @param {*} params 如： ['RACK']
 */
export function saveDcCiCheckRule (params) {
  return ajax({
    method: 'post',
    data: params,
    url: 'dataCheck/saveDcCiCheckRule'
  });
}

/**
 * 导出错误数据
 */
export function exportDcCiCheckResult () {
  return ajax({
    method: 'get',
    isDownLoad: true,
    url: 'dataCheck/exportDcCiCheckResult'
  });
}

/**
 * @author zhuhongyan 2019.6.15
 * 校验所属机柜是否未填
 */
export function checkCabinetIsNull () {
  return ajax({
    method: 'post',
    url: 'dataCheck/checkCabnetIsNull'
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验所属机柜是否存在
 */
export function parentAttrIsNull () {
  return ajax({
    method: 'post',
    url: 'dataCheck/parentAttrIsNull'
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位是否填写
 */
export function usiteAttrIsNull () {
  return ajax({
    method: 'post',
    url: 'dataCheck/usiteAttrIsNull'
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位填写格式是否正确
 */
export function uSiteFormatIsWrong () {
  return ajax({
    method: 'post',
    url: 'dataCheck/uSiteFormatIsWrong'
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位填写是否越界
 */
export function usiteOutBoundary () {
  return ajax({
    method: 'post',
    url: 'dataCheck/usiteOutBoundary',
    timeout: 300000//超时时间300s
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位填写是否重叠
 */
export function usiteRepeat () {
  return ajax({
    method: 'post',
    url: 'dataCheck/usiteRepeat',
    timeout: 300000//超时时间300s
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位是否与模型匹配
 */
export function usiteVeracity () {
  return ajax({
    method: 'post',
    url: 'dataCheck/usiteVeracity',
    timeout: 300000//超时时间300s
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位是否与模型匹配
 */
export function checkLinksPort () {
  return ajax({
    method: 'post',
    url: 'dataCheck/checkLinksPort',
    timeout: 300000//超时时间300s
  });
}
/**
 * @author zhuhongyan 2019.6.15
 * 校验U位是否与模型匹配
 */
export function checkLinks () {
  return ajax({
    method: 'post',
    url: 'dataCheck/checkLinks',
    timeout: 300000//超时时间300s
  });
}
