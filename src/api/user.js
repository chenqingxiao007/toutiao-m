/*
 * @Author: chenqx2
 * @Date: 2021-12-27 14:19:14
 * @Descripttion:
 * @FilePath: \toutiao-m\src\api\user.js
 */
import request from '../untils/request';

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
