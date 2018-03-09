import request from '@/plugins/axios'
const api = {
  // 资方列表
  async fetchLenderList(params) {
    let { data } = await request.get('/lender/search',params)
    return data
  },
  // 出账列表
  async  fetchList(params) {
    let { data } = await request.get('/outaccount/apply/detail',params)
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