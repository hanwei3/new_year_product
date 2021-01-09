import api from "./api.js"
 function getRequest(config,loginFlag = false) {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.url,
      data: config.data,
      method: 'GET',
      header: { 'content-type': 'application/json' } || config.header,
      timeout: config.timeout || 50000,
      success: (res) => {
        if(res.data) resolve(res.data);
        if(!loginFlag) wx.hideLoading()
      },
      fail: (err) => {
        reject(err)
        wx.hideLoading()
      }
    })
  } )
}
function postRequest(config,loginFlag = false) {
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.url,
      data: config.data,
      method:  'POST',
      header: { 'content-type': 'application/json' } || config.header,
      timeout: config.timeout || 50000,
      success: (res) => {
        if(res.data)  resolve(res.data);
        if(!loginFlag) wx.hideLoading()
      },
      fail: (err) => {
        reject(err)
        wx.hideLoading()
      }
    })
  } )
}
export default {
  getRequest,
  api,
  postRequest
}