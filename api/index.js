import request from '@/plugins/axios'
const api = {
  // 资方列表
  async fetchLenderList(params) {
    let { data } = await request.get('/lender/getInfoList', params)
    return data
  },
  // 资方详情
  async getLenderDetail(params) {
    let { data } = await request.get('/lender/detail/' + params)
    return data
  },
  // 资方开户
  async postLender(data) {
    let { result } = await request.post('/lender/add', data)
    return result
  },
  // 资方编辑
  async putLender(data) {
    let { result } = await request.post('/lender/update', data)
    return result
  },


  //担保方列表
  async fetchGuarantorList(params) {
    let { data } = await request.get('/guarantor/getInfoList', params)
    return data
  },
  // 担保方详情
  async getGuarantorDetail(params) {
    let { data } = await request.get('/guarantor/detail/' + params)
    return data
  },
  //担保方开户
  async postGuarantor(data) {
    let { result } = await request.post('/guarantor/add', data)
    return result
  },
  //担保方修改
  async putGuarantor(data) {
    let { result } = await request.post('/guarantor/update', data)
    return result
  },


  //sp列表
  async fetchSpList(params) {
    let { data } = await request.get('/sp/getInfoList', params)
    return data
  },
  //sp详情
  async getSpDetail(params) {
    let { data } = await request.get('/sp/detail/' + params)
    return data
  },
  //sp开户
  async postSp(data) {
    let { result } = await request.post('/sp/add', data)
    return result
  },
    //担保方修改
  async putSp(data) {
    let { result } = await request.post('/sp/update', data)
    return result
  },



  // 出账列表
  async fetchList(params) {
    let { data } = await request.get('/outaccount/apply/detail', params)
    return data
  }
}
export default api






/**
 * 获取mock
 */

// export function fetchList(query) {
// return request({
//   url: '/article/list',
//   method: 'get',
//   params: query
// })
// }

// async function fetchList() {
//   return await request.get('/outaccount/apply/detail')
// }

// 资方 
/*async  fetchLenderList(params){
  let { data } = await request.get('/article/getFrontArticleList')

  return data
  // return await request.get('/lender/search',params)
}*/



// async function fetchList(){
//  return request.get('/outaccount/apply/detail')
// }

// function fetchList() {

// return request({
//   url: '/outaccount/apply/detail',
//   method: 'get'
// })
// }

// const fetchList = () => {
//   return request({
//     url: '/outaccount/apply/detail',
//     method: 'get',
//   })
// }


// const api = {
//   fetchList: fetchList,
//   fetchLenderList: fetchLenderList
// }


// export default api
