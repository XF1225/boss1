import request from '@/utils/request'
// 接口1
export function getmockdata () {
  return request({
    url: '/api/mock.json'
  })
}
