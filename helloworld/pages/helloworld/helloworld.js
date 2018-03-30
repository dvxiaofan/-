Page({
  getProfile(res){
    // console.log(res.detail.userInfo);
    this.setData({
      'profile':res.detail.userInfo
    })
  },
  data:{
    'profile':{
      nickName:'小明同学',
      'avatarUrl':'../../img/icon.jpg'
    }
  }
})