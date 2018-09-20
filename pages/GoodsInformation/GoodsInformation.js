// pages/GoodsInformation/GoodsInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['商品维护', '新增商品'],
    currentTab: 0,
    showgoods: false,//控制商品弹框隐藏显示
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
    radioItems: [//商品类型选择
      { name: '公斤', checked: true},
      { name: '罐装', checked: false}
    ],
  },
  goodslist(e){
    var index = e.target.dataset.index;
    this.setData({
      goodsName:this.data.goodslist[index].goodsName
    })
    this.goodsHideModal();
  },
   //商品类型选择选项框点击事件
   radioChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems[' + i + '].checked'] = true
      } else {
        changed['radioItems[' + i + '].checked'] = false
      }
    }
    console.log(changed)
    this.setData(changed)
  },
  //商品编辑详情
  goods_edit(){
    wx.navigateTo({
      url: '/pages/GoodsEdit/GoodsEdit',
    })
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
   /**
   * 商品弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 商品隐藏模态对话框
   */
  goodsHideModal: function () {
    this.setData({
      showgoods: false
    });
  },
  /**
   * 商品对话框取消按钮点击事件
   */
  goodsCancel: function () {
    this.goodsHideModal();
  },
  /**
   * 商品对话框确认按钮点击事件
   */
  goodsConfirm: function () {
    this.goodsHideModal();
  },
  /**
   * 商品点击显示弹框
   */
  goodsDisplay() {
    this.setData({
      showgoods: true,
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