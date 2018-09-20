// pages/SteelCylinder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //钢瓶回收记录点击跳转
  onRecovery(){
    wx.navigateTo({
      url: '/pages/Recovery/Recovery',
    })
  },
  //钢瓶报废记录点击跳转
  onScrap(){
    wx.navigateTo({
      url: '/pages/Scrap/Scrap',
    })
  },
  //钢瓶检查记录点击跳转
  onInspect(){
    wx.navigateTo({
      url: '/pages/Inspect/Inspect',
    })
  },
  //钢瓶租赁记录点击跳转
  onLease(){
    wx.navigateTo({
      url: '/pages/Lease/Lease',
    })
  },
  //充装记录点击跳转
  onFilling(){
    wx.navigateTo({
      url: '/pages/Filling/Filling',
    })
  },
  //采购记录点击跳转
  onPurchase(){
    wx.navigateTo({
      url: '/pages/Purchase/Purchase',
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