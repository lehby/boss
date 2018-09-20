// pages/Store/Store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StoreList:[
      {
        StoreName:"某某某液化气1",
        StoreAddress:'龙泉区某某镇某某街'
      },
      {
        StoreName:"某某某液化气2",
        StoreAddress:'龙泉区某某镇某某街'
      },
      {
        StoreName:"某某某液化气3",
        StoreAddress:'龙泉区某某镇某某街'
      },
      {
        StoreName:"某某某液化气4",
        StoreAddress:'龙泉区某某镇某某街'
      }
    ],
  },
  //门店编辑点击跳转
  StoreEdit(){
    wx.navigateTo({
      url: '/pages/StoreEdit/StoreEdit',
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