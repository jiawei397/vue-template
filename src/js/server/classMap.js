import ajax from '../tools/ajax';

//获取分类列表
export function queryCiClassMpPageList (pageNum, pageSize) {
  let obj = {
    pageNum: pageNum,
    pageSize: pageSize,
    orders: '',
    cdt: {
      mpName: '',
      classType: 1
    }
  };
  return ajax({
    method: 'post',
    data: obj,
    url: '/dcCiClassMp/queryCiClassMpPageList'
  });
}
//编辑
export function onQueryClassMappingById (id) {
  let obj = {
    mpId: id,
    clsType: 1
  };
  return ajax({
    method: 'post',
    url: 'dcCiClassMp/dcCiClassMpById',
    data: obj
  });
}
//单个删除
export function deleTypeMappingTableAjax (id) {
  return ajax({
    method: 'post',
    url: 'dcCiClassMp/removeDcCiClassMpById',
    data: id
  });
}

//批量删除
export function deleAllTypeMappingTable (ids) {
  let obj = {'ids': ids};
  return ajax({
    method: 'post',
    url: 'dcCiClassMp/removeDcCiClassMpByIds',
    data: obj
  });
}
//添加分类映射
export function addTypeMappingTableData (code) {
  return ajax({
    method: 'post',
    url: 'dcCiClassMp/queryCiClassMpInfoAdd',
    data: code + ''
  });
}
/**
 *  根据 ID 查询 VMDB 分类-属性 组
 * @author GJM
 */
export function queryByIdTypeMappingVMDB (vmdbId) {
  return ajax({
    method: 'post',
    url: 'dcCiClass/dcVmCiClassInfoById',
    data: '' + vmdbId
  });
}

/**
 *  根据 ID 查询 选择DCV的内部分类 分类-属性 组
 * @author GJM
 */
export function queryByIdTypeMappingDCVOrg (id) {
  return ajax({
    method: 'post',
    url: 'dcCiClass/dcCiClassInfoById',
    data: '' + id
  });
}

/**
 *  根据 ID 查询 VMDB  标签
 * @author GJM
 */
export function queryByIdTypeMappingTags (id) {
  let obj = {'cdt': {'id': id}};
  return ajax({
    method: 'post',
    url: 'dcCiClass/dcVmTagById',
    data: obj
  });
}

/**
 * 分类映射保存
 */
export function onSaveClassMappingData (name, mpId, classType, dcvClassId, vmdbClassId, tagIds, attrMps){
  let obj = {
    name: name,
    mpId: mpId,
    classType: classType,
    dcvClassId: dcvClassId,
    vmdbClassId: vmdbClassId,
    tagIds: tagIds,
    attrMps: attrMps
  };
  return ajax({
    method: 'post',
    url: 'dcCiClassMp/saveOrUpdateDcCiMp',
    data: obj
  });
}
