import Request from "./http.ts"

const transform = {
  requestInterceptor(config: any) {
    // 请求头部处理，如添加 token
    return config
  },

  requestInterceptorCatch(err: any) {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(err)
  },

  responseInterceptor(res: any) {
    // 与后端约定的请求成功码
    const SUCCESS_CODE = 200
    if (SUCCESS_CODE !== 200) {
      return Promise.reject(res)
    }
    // 请求返回值，建议将 返回值 进行解构
    return res
  },

  responseInterceptorCatch(err: any) {
    // 这里用来处理 http 常见错误，进行全局提示
    const mapErrorStatus = new Map([
      [400, "请求方式错误"],
      [401, "请重新登录"],
      [403, "拒绝访问"],
      [404, "请求地址有误"],
      [500, "服务器出错"],
    ])
    const message = mapErrorStatus.get(err.response.status) || "请求出错，请稍后再试"
    // 此处全局报错
    console.error(message)
    return Promise.reject(err.response)
  },
}

export default new Request({
  baseURL: "/api",
  timeout: 5000,
  interceptorHook: transform,
})
