// pages/Staff/Staff.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['接线员', '派单员', '收银', '库管', '配送工'],
    currentTab: 0,
    operatorList: [
      {
        name: "张某某",
        phone: "123456789",
        post: "接线员"
      },
      {
        name: "张某某1",
        phone: "123456789",
        post: "接线员"
      },
      {
        name: "张某某2",
        phone: "123456789",
        post: "接线员"
      },
      {
        name: "张某某3",
        phone: "123456789",
        post: "接线员"
      }
    ],
    DispatchedList: [
      {
        name: "张某某",
        phone: "123456789",
        post: "派单员"
      },
      {
        name: "张某某1",
        phone: "123456789",
        post: "派单员"
      },
      {
        name: "张某某2",
        phone: "123456789",
        post: "派单员"
      },
      {
        name: "张某某3",
        phone: "123456789",
        post: "派单员"
      }
    ],
    CollectingSilverList:[
      {
        name: "张某某",
        phone: "123456789",
        post: "收银"
      },
      {
        name: "张某某1",
        phone: "123456789",
        post: "收银"
      },
      {
        name: "张某某2",
        phone: "123456789",
        post: "收银"
      },
      {
        name: "张某某3",
        phone: "123456789",
        post: "收银"
      }
    ],
    StorehouseList:[
      {
        name: "张某某",
        phone: "123456789",
        post: "库管"
      },
      {
        name: "张某某1",
        phone: "123456789",
        post: "库管"
      },
      {
        name: "张某某2",
        phone: "123456789",
        post: "库管"
      },
      {
        name: "张某某3",
        phone: "123456789",
        post: "库管"
      }
    ],
    DistributionWorkerList:[
      {
        name: "张某某",
        phone: "123456789",
        post: "配送工"
      },
      {
        name: "张某某1",
        phone: "123456789",
        post: "配送工"
      },
      {
        name: "张某某2",
        phone: "123456789",
        post: "配送工"
      },
      {
        name: "张某某3",
        phone: "123456789",
        post: "配送工"
      }
    ]
  },
  //跳转编辑页面
  onEdit() {
    wx.navigateTo({
      url: '/pages/StaffEdit/StaffEdit',
    })
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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