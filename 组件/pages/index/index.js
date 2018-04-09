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


Page({
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})