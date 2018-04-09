// Page({
  // getProfile(res){
  //   // console.log(res.detail.userInfo);
  //   this.setData({
  //     'profile':res.detail.userInfo
  //   })
  // },
  // data:{
  //   'profile':{
  //     nickName:'小明同学',
  //     'avatarUrl':'../../img/icon.jpg'
  //   }
  // }
  // data:{
  //   flag: false
  // }

  // data:{
  //   items:[
  //     { name: "商品A" },
  //     { name: "商品B" },
  //     { name: "商品C" },
  //     { name: "商品D" },
  //     { name: "商品E" },
  //     { name: "商品F" }
  //   ]
  // }

  // data:{
  //   condition:Math.floor(Math.random()*3+1)
  // }

// data:{
//     item:{
//       name: "xiaoming",
//       phone:"110",
//       address:"nanjinglu"
//     }
// }



// ClickMe(e) {
//   console.log(e)
// }

  // clickA() {
  //   console.log("clickA")
  // },
  // clickB() {
  //   console.log("clickB")
  // },
  // clickC() {
  //   console.log("clickC")
  // }





// })

var order = ['red', 'yellow', 'blue', 'green'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 0
  },

  scroll: function(e) {
    console.log(e)
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if(order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },








  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})












