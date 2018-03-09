//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播的设置
    imgUrls: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg"
    ],
    dots: true,
    autoPlay: true,
    interval: 3000,
    duration: 300,
    // tab栏的设置
    tabList: [
      {
        img: "/images/index_foot1.png",
        title: "直播"
      }, {
        img: "/images/index_foot2.png",
        title: "实操"
      }, {
        img: "/images/index_foot3.png",
        title: "题库"
      }, {
        img: "/images/index_foot4.png",
        title: "学习计划"
      }, {
        img: "/images/index_foot5.png",
        title: "直播"
      }, {
        img: "/images/index_foot6.png",
        title: "直播"
      }, {
        img: "/images/index_foot7.png",
        title: "直播"
      }, {
        img: "/images/index_foot8.png",
        title: "直播"
      }, {
        img: "/images/index_foot9.png",
        title: "直播"
      }, {
        img: "/images/index_foot10.png",
        title: "直播"
      }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
