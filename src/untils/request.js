/*
 * @Author: chenqx2
 * @Date: 2021-12-24 16:59:52
 * @Descripttion:
 * @FilePath: \toutiao-m\src\untils\request.js
 */
import axios from "axios"

/*
http://ttapi.research.itcast.cn/，
备用接口：http://toutiao-app.itheima.net/
*/

const request = axios.create({
  baseURL: "http://toutiao-app.itheima.net/" // 配置域名
})

export default request
