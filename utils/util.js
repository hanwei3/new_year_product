import api from "../network/api.js";
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function showToast(msg) {
  console.log(msg)
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 2000
  })
}

function uploadImage(imgList) {
  return new Promise(resolve => {
    let newList = []
    for(let i = 0; i < imgList.length; i++){
      wx.uploadFile({
        url: api.api.User.Upload, //仅为示例，非真实的接口地址
        filePath: imgList[i],
        name: 'file',
        success (res){
          console.log(res)
          const data = JSON.parse( res.data);
          newList.push(data.data);
          if(newList.length === imgList.length) resolve(newList)
        }
      })
    }
  })
  
  
}
export default{
  showToast,
  uploadImage
}
