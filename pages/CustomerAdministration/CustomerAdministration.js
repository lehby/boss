// pages/CustomerAdministration/CustomerAdministration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomerList:[
      {
        GasNumber:'1648614864',
        GasCycle:'2周',
        GasAddress:'龙泉驿区某某镇某某街',
      },
      {
        GasNumber:'1648614864',
        GasCycle:'2周',
        GasAddress:'龙泉驿区某某镇某某街',
      },
      {
        GasNumber:'1648614864',
        GasCycle:'2周',
        GasAddress:'龙泉驿区某某镇某某街',
      },
    ]
  },
  //客户详情编辑按钮
  onEdit(){
    wx.navigateTo({
      url: '/pages/CustomerEdit/CustomerEdit',
    })
  },
  //客户详情点击跳转
  CustomerDetails(){
    wx.navigateTo({
      url: '/pages/CustomerDetails/CustomerDetails',
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