// pages/Filling/Filling.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    FillingList:[
      {
        FillingName:'某某某液化气站',
        FillingVehicle:'WH1456486',
        FillingTotal:'6',
      },
      {
        FillingName:'某某某液化气站',
        FillingVehicle:'WH1456486',
        FillingTotal:'6',
      },
      {
        FillingName:'某某某液化气站',
        FillingVehicle:'WH1456486',
        FillingTotal:'6',
      },
      {
        FillingName:'某某某液化气站',
        FillingVehicle:'WH1456486',
        FillingTotal:'6',
      }
    ]
  },
  //充装详情点击跳转
  FillingDetails(){
    wx.navigateTo({
      url: '/pages/FillingDetails/FillingDetails',
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