// 菜单树

import request from './http'

export const getMenu = function(){
  return request.get(`/api/getMenu`,)
}