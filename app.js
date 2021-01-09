import Api from "network/export-request.js";
import utils from "./utils/util.js";
App({
  onLaunch: function () {
    this.getConfigure();
  },

  // 获取登陆凭证
  login(that) {
    wx.login({
      success (res) {
        if (res.code) {
          let code = res.code;
          wx.getUserInfo({
            success: function(res) {
              
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  // 获取一些基本的配置
  getConfigure() {
    this.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({ 
      success: res =>  this.globalData.systeminfo = res 
    })
  },

  globalData: {
    userInfo: null,
    Api,
    headerBtnPosi: null,
    systeminfo: null,
    utils
  }
})