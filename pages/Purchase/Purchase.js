// pages/Purchase/Purchase.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PurchaseList:[
      {
        PurchaseOrder:"64515318486",
        PurchasePeople:"王某某",
        PurchaseDate:"2018-08-23",
        PurchasePrice:"1200",
      },
      {
        PurchaseOrder:"64515318486",
        PurchasePeople:"李某某",
        PurchaseDate:"2018-08-23",
        PurchasePrice:"1200",
      },
      {
        PurchaseOrder:"64515318486",
        PurchasePeople:"张某某",
        PurchaseDate:"2018-08-23",
        PurchasePrice:"1200",
      }
    ]
  },
  //采购详情点击跳转
  PurchaseDetails(){
    wx.navigateTo({
      url: '/pages/PurchaseDetails/PurchaseDetails',
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