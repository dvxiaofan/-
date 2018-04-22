//index.js
//获取应用实例
// const app = getApp()

var initData = "This is the first line \nThis is the second line";
var extraLine = [];

Page({
  data: {
    text: initData
  },
  add: function(e) {
    extraLine.push("Other line")
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function(e) {
    if(extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})
