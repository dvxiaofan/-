
var iinfo = '';
wx.getSystemInfo({
  success: function(res) {
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.platform)
    iinfo = res.model;
  }
})

Page({
  data: {
    currentInfo: iinfo
  }
})