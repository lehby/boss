// pages/Administration/Administration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  //新增商品
  onAddgoods(){
    wx.navigateTo({
      url: '/pages/Addgoods/Addgoods',
    })
  },
  //密钥管理点击跳转
  onSecretKey(){
    wx.navigateTo({
      url: '/pages/SecretKey/SecretKey',
    })
  },
  //门店管理点击跳转
  onStore(){
    wx.navigateTo({
      url: '/pages/Store/Store',
    })
  },
  //商品信息维护点击跳转
  onGoodsInformation(){
    wx.navigateTo({
      url: '/pages/GoodsInformation/GoodsInformation',
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