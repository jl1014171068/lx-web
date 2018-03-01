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
    resultarr = [],
    params = {
      json: json,
      nodeId: nodeId,
      key: key,
      objName: objName
    };

  // let getNode = (json, nodeId, key, objName) => {
  let getNode = (params) => {
    for (let item in params.json) {
      if (params.node) break;
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
    getNode(params)
  }

  traverseTree(params)
}

const utils = {
  recrysuve: recrysuve
}

export default utils
