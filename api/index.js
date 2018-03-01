import request from '@/plugins/axios'

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

async function fetchList(){
	return await request.get('/outaccount/apply/detail')
}

// async function fetchList(){
// 	return request.get('/outaccount/apply/detail')
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


const api = {
  fetchList: fetchList
}


export default api
