/**
 * Created by mokong on 18/02/23.
 */
/**
 * [双重递归搜索]
 * @param  {[type]} json    [json对象]
 * @param  {[type]} nodeId  [查找key的val]
 * @param  {[type]} key     [关键key]
 * @param  {[type]} objName [下级对象名]
 * @return {[type]}         [返回结果]
 */

function recrysuve(json, nodeId, key, objName) {
  let node = null,
    zc = null,
    parentNode = null,
    resultarr = [];
  let getNode = (json, nodeId, key, objName) => {
    for (let item of json) {
      if (node) break;
      if (!item || !item['' + key + '']) continue;
      if (item['' + key + ''] === nodeId) {
        node = item
        break;
      } else {
        if (item['' + objName + '']) {
          parentNode = item
          getNode(item['' + objName + ''], nodeId, key, objName)
        } else {
          continue
        }
      }
    }
    if (!node) parentNode = null;
    return {
      parentNode: parentNode,
      node: node
    }
  }
  let traverseTree = (json, nodeId, key, objName) => {
    node = null
    parentNode = 1
    zc = getNode(json, nodeId, key, objName);
    if (zc.parentNode === null) return zc;
    if (zc.parentNode) {
      resultarr.unshift(zc)
      traverseTree(json, zc.parentNode['' + objName + ''], key, objName)
    }
  }
  traverseTree(json, nodeId, key, objName)
  return resultarr
}

const utils = {
  recrysuve: recrysuve
}

export default utils
