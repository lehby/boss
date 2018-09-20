// pages/OrderAdministration/OrderAdministration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['订气订单', '维修订单'],
    currentTab: 0,
    OrderNavBar:['待处理','订单确认','配送出发','配送完成','订单取消'],
    OrderCurrentTab:0,
    //待处理
    WaitHandleList:[
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'待处理',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'待处理',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'待处理',
      }
    ],
    //订单确认
    OrderConfirmList:[
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单确认',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单确认',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单确认',
      }
    ],
    //配送出发
    DistributionStarting:[
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送出发',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送出发',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送出发',
      }
    ],
    //配送完成
    DeliveryCompletion:[
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送完成',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送完成',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'配送完成',
      }
    ],
    //订单取消
    OrderCancel:[
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单取消',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单取消',
      },
      {
        OrderId:"464861534",
        Price:"1200",
        phone:"123456786789",
        address:"龙泉区某某镇某某街",
        state:'订单取消',
      }
    ]
  },
  //订单详情页面跳转
  OrderAdministrationDetails(){
    wx.navigateTo({
      url: '/pages/OrderAdministrationDetails/OrderAdministrationDetails',
    })
  },
  //维修详情页面跳转
  RepairAdministrationDetails(){
    wx.navigateTo({
      url: '/pages/RepairAdministrationDetails/RepairAdministrationDetails',
    })
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //子导航控制
  OrderNavBarTap(e){
    this.setData({
      OrderCurrentTab: e.currentTarget.dataset.idx
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