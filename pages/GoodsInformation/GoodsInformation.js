// pages/GoodsInformation/GoodsInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist:[
      {
        goodsName:'液化气50G1',
        SalesType:'公斤',
        UnitPrice:"120",
        Stock:'500公斤'
      },
      {
        goodsName:'液化气50G2',
        SalesType:'公斤',
        UnitPrice:"120",
        Stock:'500公斤'
      },
      {
        goodsName:'液化气50G3',
        SalesType:'公斤',
        UnitPrice:"120",
        Stock:'500公斤'
      }
    ],
    goodsName:'',
  },
  //商品编辑详情
  goods_edit(){
    wx.navigateTo({
      url: '/pages/GoodsEdit/GoodsEdit',
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