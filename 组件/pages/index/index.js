// Page({
//   data: {
//     x: 0,
//     y: 0
//   },
//   tap: function (e) {
//     this.setData({
//       x: 30,
//       y: 30
//     });
//   },
//   onChange: function (e) {
//     console.log(e.detail)
//   },
//   onScale: function (e) {
//     console.log(e.detail)
//   }
// })


// Page({
//   onReady() {
//     this.videoCtx = wx.createVideoContext('myVideo')
//   },
//   play() {
//     this.videoCtx.play()
//   },
//   pause() {
//     this.videoCtx.pause()
//   }
// })


var types = ['default', 'primary', 'wran'];
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    wranSize: 'default',
    disabled: 'false',
    loading: 'false',
    plain: 'plain'
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for(var i = 0; i < types.length; ++ i) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changeData = {}
      changeData[key] = this.data[key] === 'defaule' ? 'mini' : 'default'
      this.setData(changeData)
    }
  })(types[i])
}

Page(pageObject)